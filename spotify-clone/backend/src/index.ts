// src/index.ts (Entry point)
import "reflect-metadata";
import express from "express";
import { AppDataSource } from "../ormconfig";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import songRoutes from "./routes/song";

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/songs", songRoutes);

const PORT = process.env.PORT || 5000;
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
