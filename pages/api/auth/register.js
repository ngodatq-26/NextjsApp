import { connectToDatabase } from "../../../middlewares/database";
import Cors from 'cors';
import runMiddleware from "../../../middlewares/middleware";
import bcrypt from "bcryptjs/dist/bcrypt";
import { hash } from "bcrypt";

const cors = Cors({
    methods: ['GET', 'HEAD'],
})

const rounds = 10;
const Register = async (req,res) =>{

    runMiddleware(req,res,cors);
    const {db} = await connectToDatabase();
    const {email,password,confirmPassword,name} = req.body;

    const username = await db.collection("Users").count({email : req.body.email}).then((data) =>{
        if(data !== 0) {
            return Promise.reject(Error("Email has been exist !!!"));
        }
    }).then(() =>{
        db.collection("Users").insert({
            email : req.body.email,
            name : req.body.name,
            password : bcrypt.hashSync(req.body.password),
        }).then((success) => {
           return res.send({
               status :'200',
               success :'true',
               message : "Account is created successfully",
               data : {
                email : email,
                password : req.body.password,
                name : name
               }
           });
        })
    }).catch((error) =>{
        return res.send({
            status : '200',
            success : 'false',
            message : error.toString()
        })
    })

}

export default Register;
