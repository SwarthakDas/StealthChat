import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs"

export async function POST(request: Request){
    await dbConnect()

    try {
        const {username,email,password}= await request.json()

        const existingUsername= await UserModel.findOne({
            username,
        })
        if(existingUsername){
            return Response.json({
                success:false,
                message: "Username is already taken"
            },{status:400})
        }

        const existingUserByEmail= await UserModel.findOne({email})

        if(existingUserByEmail){
            return Response.json({
                success:false,
                message: "User already exists"
            },{status:400})
        }
        else{
            const hashedPassword= await bcrypt.hash(password,10)
            const expiryDate=new Date()
            expiryDate.setHours(expiryDate.getHours()+1)
            const newUser= new UserModel({
                username,
                email,
                password: hashedPassword,
                isAcceptingMessage: true,
                messages: []
            })
            await newUser.save()
        }
        return Response.json({
            success:true,
            message: "User registered successfully"
        },{status:201})
    } catch (error) {
        console.error("Error registering user",error);
        return Response.json({
            success: false,
            message: "Error registering user"
        },
        {
            status: 500
        }
    )
    }
}