const crypto = require("crypto");

const setStrength = (length) => {
  if (length <= 10) return "Good";
  if (length <= 18) return "Strong";

  return "Very strong";
};

const generate = (parameters) => {
  let { length, specialCharacters } = parameters;

  const passLength = length || 12;

  let strength = setStrength(passLength);

  if (passLength < 8 || passLength > 20) {
    let error = "Invalid parameters";
    return { error };
  }

  let charMap =
    "qrstEFGefC567aghijklmVWXYnoKLD34MZ12uvwxyp89NOPQRSTUHIJzABbcd0";
  let password = "";
  if (specialCharacters) charMap = "~!@#$%" + charMap + "&*_-+?";

  for (let i = 0; i < passLength; i++) {
    password += charMap.charAt(crypto.randomInt(charMap.length));
  }

  return {
    strength,
    password,
  };
};

module.exports = generate;
