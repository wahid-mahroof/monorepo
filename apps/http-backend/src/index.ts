import express from "express";
import jwt from "jsonwebtoken";
import { JWT_secret } from "./config";

const app = express();

app.post("/signup ", (req, res) => {});
app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_secret
  );

  res.json({ token });
});

app.listen(3000);
