//core modules
const path = require("path");

//other-modules
const express = require("express");
const compression = require("compression");
const cors = require("cors");

//imported functions
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.enable("trust proxy");

//Setting up the template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Serving static files
app.use(express.static(path.join(__dirname, "public")));

//CORS
app.use(cors());
app.options("*", cors());

//Mounting the exported routers on a route
app.use("/", viewRouter);

module.exports = app;
