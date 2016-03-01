describe("splitNumber_test", function() {

  it("2bits input test", function() {
  var input = "99";
  var correctResult= ['99'];
  var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("3bits input test", function() {
  var input = "310";
  var correctResult= ['310'];
  var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("4bits input test", function() {
  var input = "1501";
  var correctResult= ['501', '1'];
  var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("5bits input test", function() {
  var input = "12609";
  var correctResult= ['609', '12'];
  var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("6bits input test", function() {
  var input = "512607";
  var correctResult= ['607', '512'];
  var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });

  it("invalid input should return false", function() {
    var input = "dsdasdas";
    var correctResult= false;
    var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });


});
