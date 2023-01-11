const express = require("express");
const router = require("./src/controllers/user.controller");

const app = express();

app.use(express.json());

app.use("/users", router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
