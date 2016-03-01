describe("concatNumber", function() {

  it("input 100", function() {
    var input = ['ten'];
    var correctResult= 'ten';
    var result = concatNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("6bits input test", function() {
    var input = ['one hundred'];
    var correctResult= 'one hundred';
    var result = concatNumber(input);

    expect(result).toEqual(correctResult);
  });
  it("input 1001", function() {
    var input = ['one', 'one'];
    var correctResult= 'one thousand and one';
    var result = concatNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 12326", function() {
    var input = ['three hundred and twenty six', 'twelve'];
    var correctResult= "twelve thousand, three hundred and twenty six";
    var result = concatNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 103001", function() {
    var input = ['one', 'one hundred and three'];
    var correctResult= 'one hundred and three thousand and one';
    var result = concatNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 1302857", function() {
    var input = ['eight hundred and fifty seven', 'three hundred and two', 'one'];
    var correctResult= 'one million, three hundred and two thousand, eight hundred and fifty seven';
    var result = concatNumber(input);

    expect(result).toEqual(correctResult);
  });
});
