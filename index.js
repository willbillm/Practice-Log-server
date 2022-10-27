import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import statRoutes from './routes/tracker.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

app.use(cors());
app.use('/stats', statRoutes);

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.${process.env.DB_STRING}.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
console.log(`Server is listening on port: ${PORT}`)
)).catch((err) => console.error(err.message))