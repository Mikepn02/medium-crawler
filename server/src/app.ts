import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mediumRoutes from "./routes/medium.route";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);


app.use("/api/medium", mediumRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export default app;
