const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

//Version routes
const v1Router = require("./api/v1");
app.use(cors());
app.use("/v1", v1Router);

//Server listennnig
app.listen(PORT, () => { console.log("App running on "+PORT) });
