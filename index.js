const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get("/api/hello", (req, res) => {
  res.status(200).json({ msg: "Hello from server" });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
