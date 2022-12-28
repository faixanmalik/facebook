var CryptoJS = require("crypto-js");


const handler = async (req,res)=>{

    if (req.method == 'POST'){
            const {email , password} = req.body;
            let newuser = new User( { email , password});
            await newuser.save();

            res.status(200).json({ success: true, message: "Now Login!"})
            }
        }

export default connectDb(handler);