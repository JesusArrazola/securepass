const crypto = require("crypto");

const generate = (parameters) => {
  let { length, specialCharacters } = parameters;
  console.log(parameters);
  const passLength = length || 12;
  let charMap =
    "qrstEFGefC567aghijklmVWXYnoKLD34MZ12uvwxyp89NOPQRSTUHIJzABbcd0";
  let password = "";
  if (specialCharacters) charMap = "~!@#$%" + charMap + "&*_-+?";

  for (let i = 0; i < passLength; i++) {
    password += charMap.charAt(crypto.randomInt(charMap.length));
  }

  return {
    strength: "very strong",
    password: password,
  };
};

module.exports = generate;
