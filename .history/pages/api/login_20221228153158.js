import { useRouter } from "next/router";



const handler = async (req,res)=>{

    if (req.method == 'POST'){
            const {email , password} = req.body;
            let newuser = new User( { email , password});
            await newuser.save();

            res.status(200).json({ success: true, message: "Now Login!"})
            router.push('')
            }
        }

export default connectDb(handler);