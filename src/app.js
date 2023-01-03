import express  from "express";
import taskRoutes from './routes/task.routes'
import morgan from "morgan";
import cors from "cors";

//inicialización express
const app = express();

app.use(morgan('dev'))

app.use(express.json());

//uso rutas
app.use(taskRoutes);

app.use(cors());

export default app;
