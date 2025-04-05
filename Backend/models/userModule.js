const pool=require('../config/db')
const findUserBYId= async(id)=>{
    const {id}=req.params.id
   try{
    const result=pool.query('select * from users where id = $1 RRETURNING *',[id])
    res.status(200).json({message:"user logined successfully"})
   }catch(err){
    console.error('Error creating user:', err);
        throw err;
   }
}
module.exports={findUserBYId}