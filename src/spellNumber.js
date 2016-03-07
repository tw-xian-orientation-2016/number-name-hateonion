function spellNumber(input) {
  var splitedNumber = splitNumber(input);
  var spelledNumber;
  if(input === '0') {
    return 'zero';
  }
  if(splitedNumber) {
    spelledNumber = getSpelledNumber(splitedNumber);
    return concatNumber(spelledNumber);

  }
  return "error Input";

  }
