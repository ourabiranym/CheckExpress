
//import express
const express = require("express");
//initiate our app
const app = express();
const ejs = require ('ejs');

//access to the views
app.set("view engine", "ejs");
app.use(express.static("views"));

app.use(express.json())

const Datesss = new Date();
const day = Datesss.getDay();
const hours = Datesss.getHours();

app.use((req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
    next();
  } else {
    res.render("Closing");
  }
});

//get the HomePage on the path '/'
app.get("/", (req, res) => {
  res.render("HomePage");
});


const userRouter =require ("./routes/route");
app.use ("/", userRouter)

// app.get("/contact", (req, res) => {
//   res.render("ContactUs");
// });

// app.get("/services", (req, res) => {
//   res.render("Services");
// });

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});