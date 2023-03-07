import express  from "express";
import taskRoutes from './routes/task.routes'
import userRoutes from './routes/user.routes'
import morgan from "morgan";
import cors from "cors";

//inicialización express
const app = express();

app.use(cors());

app.use(morgan('dev'))

app.use(express.json());

//uso rutas
app.use(taskRoutes);
app.use(userRoutes);


export default app;
