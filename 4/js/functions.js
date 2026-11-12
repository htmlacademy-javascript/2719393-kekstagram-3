/* eslint-disable brace-style */
function checkLengthStr(checkStr, lengthStr) {
  if (typeof checkStr === 'string'){
    if (checkStr.length <= lengthStr){
      return true;
    }else { return false; }
  } else { return false; }
}

checkLengthStr('Привет', 10);
checkLengthStr('проверяемая строка', 20);
checkLengthStr('проверяемая строка', 10);

function checkLengthStrWithoutSpace(checkStr, lengthStr) {
  if (typeof checkStr === 'string'){
    const newStr = checkStr.replaceAll(' ','');
    if (newStr.length <= lengthStr){
      return true;
    }else { return false; }
  } else { return false; }
}

checkLengthStrWithoutSpace('про веряемая стр ока', 20);

function checkPalindrom(inStr) {
  const newStr = inStr.replaceAll(' ','').toLowerCase();
  let reversedStr = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedStr += newStr[i];
  }
  return newStr === reversedStr;
}

checkPalindrom('Лёша на полке клопа нашёл');
checkPalindrom('ТоПот');
checkPalindrom('njGjn');
checkPalindrom('кот ');
