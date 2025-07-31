import dotenv from "dotenv"
import connectDB from "../public/db/index.js";

dotenv.config({
    path : './env'
})


connectDB()