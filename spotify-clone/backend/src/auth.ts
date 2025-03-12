// src/routes/auth.ts (Authentication Routes)
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../ormconfig";
import { User } from "../entity/User";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User();
  user.email = email;
  user.password = hashedPassword;

  await AppDataSource.manager.save(user);
  res.json({ message: "User registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await AppDataSource.manager.findOneBy(User, { email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, "your_jwt_secret", {
    expiresIn: "1h",
  });
  res.json({ token });
});

export default router;
