function loadDictionary() {
  return {
    0 : '',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    00 : '',
    01 : 'one',
    02 : 'two',
    03 : 'three',
    04 : 'four',
    05 : 'five',
    06 : 'six',
    07 : 'seven',
    08 : 'eight',
    09 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'fourty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety'};
}

function tenAndbitsJudge(splitNumberArr) {
  var dictionary = loadDictionary();

  var spelledTenAndBits= [];
  var tenAndBitsStr;
  splitNumberArr.forEach(function (splitNumber) {
    var currentStr = splitNumber < 100 ? splitNumber : splitNumber.substr(1, 2);
    if(currentStr in dictionary) {
      tenAndBitsStr = dictionary[currentStr];
    } else {
      var ten = parseInt(currentStr / 10) * 10;
      var bit = currentStr % 10;
      tenAndBitsStr = ten >= 20 ? (dictionary[ten] + " " + dictionary[bit]) : (dictionary[ten]  + dictionary[bit]);
    }
    spelledTenAndBits.push(tenAndBitsStr);
  });
  return spelledTenAndBits;
}

function hundredJudge(splitNumberArr) {
  var dictionary = loadDictionary();

  var spelledHundred = [];
  splitNumberArr.forEach(function (splitNumber) {
    var currentStr = splitNumber < 100 ? "" : splitNumber[0];
    if(currentStr in dictionary) {
      spelledHundred.push(dictionary[currentStr]);
    } else{
      spelledHundred.push(currentStr);
    }
  });
  return spelledHundred;

}

function stringConcat(spelledTenAndBits, spelledHundred) {
  var spelledNumber = [];

  var eachSpelledNumber;
  for(var i = 0; i < spelledTenAndBits.length; i++) {
    if(spelledTenAndBits[i] === ""){
      if(spelledHundred.length > 0) {
        eachSpelledNumber = spelledHundred[i].length > 0 ? spelledHundred[i] + " hundred" + spelledTenAndBits[i] : spelledTenAndBits[i];
      }
    } else{
      if(spelledHundred.length > 0) {
        eachSpelledNumber = spelledHundred[i].length > 0 ? spelledHundred[i] + " hundred and " + spelledTenAndBits[i] : spelledTenAndBits[i];
      }
    }
    spelledNumber.push(eachSpelledNumber);
  }
  return spelledNumber;
}

function getSpelledNumber(splitedNumber) {
  var spelledTenAndBits = tenAndbitsJudge(splitedNumber);
  var spelledHundred = hundredJudge(splitedNumber);

  var spelledNumber = stringConcat(spelledTenAndBits, spelledHundred);
  return spelledNumber;
}
