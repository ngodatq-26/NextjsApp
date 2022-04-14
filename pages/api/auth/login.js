import { connectToDatabase } from "../../../middlewares/database";
import Cors from 'cors'
import runMiddleware from '../../../middlewares/middleware'
// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
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
          if(req.body.password !== user[0].password) {
            return Promise.reject(Error('The password is Invalid!!!'))
          } 
          return Promise.resolve(user)
       } 
       else return Promise.reject(Error('The email is not exist!!!!'))
    }).then((data) =>{
      return res.send({
        status : '200',
        user : data,
      })
    }).catch(error =>{
      return res.send({
        status : '400',
        message : error.toString()
      })
    }) 

    return res.json(username)
};