const buildParamsObject = (length, specialCharacters) => {
  let result = {};

  if (length !== undefined) Object.assign(result, { length });
  if (specialCharacters !== undefined)
    Object.assign(result, { specialCharacters });

  return result;
};

module.exports = { buildParamsObject };
