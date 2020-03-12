const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  while (expr.length % 10 !== 0) {
    let str = "0" + expr;
    expr = str;
  }

  let binaryArr = [];
  for (let i = 0; i < expr.length; i += 10) {
    binaryArr.push(expr.substr(i, 10));
  }

  let morze = binaryArr.map(function(item) {
    if (item[0] == "*") {
      item = " ";
    } else {
      let itemStr = "";
      for (let i = 0; i < item.length; i += 2) {
        let para = item[i] + item[i + 1];
        if (para === "10") {
          itemStr += ".";
        } else if (para === "11") {
          itemStr += "-";
        }
      }
      item = itemStr;
    }
    return item;
  });

  let decodeStr = morze
    .map(function(item) {
      for (let key in MORSE_TABLE) {
        if (item == key) {
          item = MORSE_TABLE[key];
        }
      }
      return item;
    })
    .join("");

  return decodeStr;
}

module.exports = {
  decode
};
