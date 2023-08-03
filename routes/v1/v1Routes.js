const express = require("express");
const generate = require("../../controllers/passwordGenerator");
const { buildParamsObject } = require("../../helpers/parameterObject");
const router = express.Router();

router.get("/", (req, res) => {
  const { length, specialCharacters } = req.query;
  let parameters = buildParamsObject(length, specialCharacters);

  let result = generate(parameters);

  if (result !== null) res.json(result);
  else res.sendStatus(400);
});

module.exports = router;
