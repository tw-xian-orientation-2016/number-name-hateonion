describe("getSpelledNumber", function() {

  it("input zero", function() {
  var input = ['0'];
  var correctResult= ['zero'];
  var result = splitNumber(input);

  expect(result).toEqual(correctResult);
});

  it("input 100", function() {
    var input = ['10'];
    var correctResult= ['ten'];
    var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("6bits input test", function() {
    var input = ['100'];
    var correctResult= ['one hundred'];
    var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });
  it("input 1001", function() {
    var input = ['001', '1'];
    var correctResult= ['one','one'];
    var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 12306", function() {
    var input = ['306', '12'];
    var correctResult= ['three hundred and six', 'twelve'];
    var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("input 103001", function() {
    var input = "['001', '103']";
    var correctResult= ['one', 'one hundred and three'];
    var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });

});
