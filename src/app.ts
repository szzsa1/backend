import express from "express";
import userRoutes from "./routes/userRoutes";
import loggingMiddleware from "./middlewares/logger.middleware";

const app = express();

app.use(express.json());

app.use(loggingMiddleware);
app.use("/users", userRoutes);


export default app;
