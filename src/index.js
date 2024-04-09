// require('dotenv').config({path: '/.env'})

import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB from "./db/index.js";

dotenv.config({
    path: '.env'
})

/*function connectDB(){

}

connectDB()
*/

connectDB()

















//using iifs
/*const app = express()

;( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERR: ",error);
            throw error
        })
        app.listen(process.env.PORT,() => {
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })


    } catch (error) {
        console.error("ERROR: ",error)
        throw
    }
})()
*/
