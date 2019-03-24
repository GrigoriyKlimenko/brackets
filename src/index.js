module.exports = function check(str, bracketsConfig) {
  // your solution
  let i;
  let j;
  let arrayBrackets = str.split('');
  bracketsConfig = bracketsConfig.toString().replace(/,/g, '').split('');
  for (i = 1; i < arrayBrackets.length; i++) {
    if (i == 0){
      i = 1;
    }
    for (j = 1; j < bracketsConfig.length; j +=2){
      if (arrayBrackets[i] == bracketsConfig[j] && arrayBrackets[i - 1] == bracketsConfig[j - 1]){
        arrayBrackets.splice(i-1, 2);
        i-=2;
        break;
      }
    }
  }
  if (arrayBrackets.length == 0){
    return true;
  } else {
    return false;
  }
}
