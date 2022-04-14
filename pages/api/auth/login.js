import { connectToDatabase } from "../../../middlewares/database";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const {email,password} = req.body;
  const username = await db
    .collection("Users")
    .find({email : req.body.email})
    .toArray().then((user) =>{
       if(user) {
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

