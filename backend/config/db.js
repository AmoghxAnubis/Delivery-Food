import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://amoghzack321:Tsukoyomi1704@foodapp.xwys9.mongodb.net/DELIVERY-FOOD').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.