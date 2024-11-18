import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivanshu:7075@cluster0.8ts9w.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}