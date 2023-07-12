import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from "body-parser"; 
import officerRoute from './Routes/policeofficer.js';
import stationRoute from './Routes/policestation.js';
import cookieParser from 'cookie-parser';
import { authorize } from './Middleware/auth.js';



// Configuring the server
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser('12345-67890-09876-54321'));


// Routes

app.use("/officer", authorize, officerRoute);
app.use("/station", authorize, stationRoute);



//DB connection
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => {
        console.log('Server Port: ' + PORT)
    })
}).catch((error) => console.log(error))