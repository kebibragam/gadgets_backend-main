if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/.env" });
}

const express = require("express");
const passport = require("passport");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(passport.initialize());
app.use("/static", express.static(path.join(__dirname, "static")));


app.get("/", (req, res) => {
  res.send("Main Route");
});

app.get("/hello", (req, res) => {
  res.send("Hello route");
});


app.listen(PORT, (err) => {
  if (err) {
    /*  eslint no-console: ["error", { allow: ["log"] }] */
    console.log(err);
  } else {
    console.log(`Connected to PORT ${PORT}`);
  }
});
