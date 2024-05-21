const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./config/DB");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const ownerroutes = require("./routes/ownerroutes");
const userroutes = require("./routes/userroutes");
const productsroutes = require("./routes/productsroutes");

app.use("/owners",ownerroutes)
app.use("/user",userroutes)
app.use("/products",productsroutes)

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
