describe("tenAndbitsJudge", function() {

  it("input 100", function() {
    var input = ['10'];
    var correctResult= ['ten'];
    var result = getSpelledNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("6bits input test", function() {
    var input = ['100'];
    var correctResult= ['one hundred'];
    var result = getSpelledNumber(input);

    expect(result).toEqual(correctResult);
  });
  it("input 1001", function() {
    var input = ['001', '1'];
    var correctResult= ['one','one'];
    var result = getSpelledNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 12326", function() {
    var input = ['326', '12'];
    var correctResult= ['three hundred and twenty six', 'twelve'];
    var result = getSpelledNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 103001", function() {
    var input = ['001', '103'];
    var correctResult= ['one', 'one hundred and three'];
    var result = getSpelledNumber(input);

    expect(result).toEqual(correctResult);
  });

});
