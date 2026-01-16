import express from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the production http-server");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  console.log(newUser);

  res.json({
    message: "Signup successful!",
  });
});

app.listen(3002, () => {
  console.log("Http server listening on port 3002!");
});
