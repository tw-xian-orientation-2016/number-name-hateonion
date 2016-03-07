function splitNumber(inputStr) {
  if(parseInt(inputStr)) {
    var splitNumberArr = [];
    for(var i = inputStr.length; i > 0; i = i - 3) {
      splitNumberArr.push(inputStr.substring(i - 3, i));
    }
    return splitNumberArr;
  }
  return false;
}
