import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://pandaganesh960:ganesh.1234@cluster0.qetg0.mongodb.net/f00d-del"
    )
    .then(() => console.log("DB Connected"));
};
