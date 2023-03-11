// PACKAGES IMPORTS
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import connectDB from './config/dbConn.js'

// ROUTES IMPORTS
import generalRoutes from './routes/general.js'
import rootRoute from './routes/rootRoute.js'

//data imports
import User from './models/User.js'

// CONFIGURATION
dotenv.config();
const app = express()
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));
app.use(express.urlencoded({extended:false}))
app.use(cors());

// ROUTES
app.use('/', generalRoutes);
app.use('/root', rootRoute);

// MONGO SETUP AND LISTENING TO PORT 
const PORT = process.env.PORT || 9000;
connectDB();
mongoose.connection.once("open", () => {
    console.log("DB connected..");
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);

        // Only add data one time
        // User.insertMany(dataUser);
    })
})
