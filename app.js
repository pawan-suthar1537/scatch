const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const cookieParser = require("cookie-parser");
const path = require("path");
const port = 8000 | process.env.PORT;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});