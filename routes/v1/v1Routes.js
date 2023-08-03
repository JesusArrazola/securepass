const bodyParser = require("body-parser");
const express = require("express");
const generate = require("../../controllers/passwordGenerator");
const { buildParamsObject } = require("../../helpers/parameterObject");
const router = express.Router();

router.get("/", (req, res) => {
  const { length, specialCharacters } = req.query;
  let parameters = buildParamsObject(length, specialCharacters);

  let result = generate(parameters);

  res.json(result);
});

module.exports = router;
