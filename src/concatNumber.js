function loadUnit() {
  return ["", "thousand", "million"];
}

function connectNumber(spelledNumber) {
  var connectedStr = "";
  var unit = loadUnit();

  for(var i = spelledNumber.length - 1; i >= 0; i--) {
    if(i > 0) {
      connectedStr += spelledNumber[i] + " " + unit[i];
      if(i >= 1) {
        connectedStr += ", ";
      }
    }
    else {
      connectedStr += spelledNumber[i];
    }
  }
  return connectedStr;

}

function correctFormat(connectedStr) {
  var splitedStr = connectedStr.split(",");
  var resultStr = splitedStr[0];
  if(splitedStr.length > 1) {
    for(var i = 1; i < splitedStr.length; i++){
      if(splitedStr[i].indexOf('and') !== -1) {
        resultStr += "," + splitedStr[i];
      } else {
        resultStr += " and" + splitedStr[i];
      }
    }
  }
  return resultStr;
}

function concatNumber(spelledNumber) {
  var connectedStr = connectNumber(spelledNumber);
  return correctFormat(connectedStr);
}
