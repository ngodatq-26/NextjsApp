import { connectToDatabase } from "../../../middlewares/database";
import Cors from 'cors'
import runMiddleware from '../../../middlewares/middleware'
import bcrypt from "bcryptjs/dist/bcrypt";
import jwt from"jsonwebtoken";

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD','POST'],
})

export default async (req, res) => {
  await runMiddleware(req,res,cors) 
  const { db } = await connectToDatabase();
  const {email,password} = req.body;

  const username = await db
    .collection("Users")
    .find({email : req.body.email})
    .toArray().then((user) =>{
       if(user[0]) {
        return bcrypt.compare(password, user[0].password).then((result) => {
          if (result) return Promise.resolve(user);
          return Promise.reject(Error('The password you entered is incorrect'));
        });
       } 
       else return Promise.reject(Error('The email is not exist!!!!'))
    }).then((data) =>{
      const token = jwt.sign({"email" : email },process.env.JWT_SECRECT,{expiresIn :86400})
      return res.send({
        status : '200',
        success : 'true',
        user : {
          email : data[0].email,
          password : req.body.password
        },
        token : token
      })
    }).catch(error =>{
      return res.send({
        status : '200',
        success : 'false',
        message : error.toString()
      })
    }) 

    return res.json(username)
};