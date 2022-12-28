var CryptoJS = require("crypto-js");


const handler = async (req,res)=>{

    if (req.method == 'POST'){
            const {firstname, lastname, email} = req.body;
            let newuser = new User( { email , password});
            await newuser.save();

            res.status(200).json({ success: true, message: "New User added Succesfully!"})
            }
        }

export default connectDb(handler);