const crypto = require("crypto");

const setStrength = (parameters) => {
  let { specialCharacters } = parameters;
  let length = parameters.length || 12;

  if (length >= 8 && length <= 11) return "Good";
  if (length >= 12 && length <= 20) {
    if (!specialCharacters) {
      return "Strong";
    } else {
      if (length == 20) return "Unbreakable";
      else return "Very Strong";
    }
  }
};

const generate = (parameters) => {
  let { length, specialCharacters } = parameters;

  let strength = setStrength(parameters);

  const passLength = length || 12;
  if (passLength < 8 || passLength > 20) return null;

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
