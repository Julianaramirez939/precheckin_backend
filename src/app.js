import express from 'express';
import cors from 'cors'; 
import precheckinRoutes from './routes/precheckin.routes.js';



const app = express();
app.use(cors());
//middlewares
app.use(express.json());


app.use(precheckinRoutes)
export default app;