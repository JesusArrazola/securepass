const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

//Version routes
const v1Router = require("./api/v1");
app.use("/v1", v1Router);

//Server listennnig
app.listen(PORT, () => {});
