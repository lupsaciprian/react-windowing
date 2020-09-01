import generateRandomString from "./generateRandomString";

export default function (setNumber = 1, startFrom = 0) {
  const stringArray = [],
    multiplier = 10,
    maxString = 500;
  let step = 0;

  while (step < setNumber) {
    let currentStringLength = 0,
      finalString = "";
    while (currentStringLength <= maxString - multiplier) {
      const string =
        generateRandomString(Math.floor(Math.random() * multiplier)) + " ";
      finalString += string;
      currentStringLength += string.length;
    }

    const newItem = { index: startFrom + step, text: finalString };
    stringArray.push(newItem);
    step++;
  }

  return stringArray;
}
