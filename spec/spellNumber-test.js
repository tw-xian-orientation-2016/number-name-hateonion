describe("integrate test", function() {

  it("input 10", function() {
    var input = '10';
    var correctResult = 'ten';
    var result = spellNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 100", function() {
    var input = '100';
    var correctResult= 'one hundred';
    var result = spellNumber(input);

    expect(result).toEqual(correctResult);
  });
  it("input 1001", function() {
    var input = '1001';
    var correctResult= 'one thousand and one';
    var result = spellNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 12326", function() {
    var input = '12326';
    var correctResult= "twelve thousand, three hundred and twenty six";
    var result = spellNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 103001", function() {
    var input = '103001';
    var correctResult= 'one hundred and three thousand and one';
    var result = spellNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 0", function() {
    var input = '0';
    var correctResult= 'zero';
    var result = spellNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input invalid", function() {
    var input = 'dasdsadsa';
    var correctResult= 'error Input';
    var result = spellNumber(input);

    expect(result).toEqual(correctResult);
  });
});
