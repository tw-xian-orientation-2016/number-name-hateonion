describe("splitNumber_test", function() {
  var input = "512607";
  var correctResult= ['607', '502'];


  it("it should return a split Number Array", function() {
    var result = splitNumber(input);

    expect(result).toEqual(correctResult);
  });
});
