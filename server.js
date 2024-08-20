const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connection to Database"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers.js");
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("Server Started port:3000"));
