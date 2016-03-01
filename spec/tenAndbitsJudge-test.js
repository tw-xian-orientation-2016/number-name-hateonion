describe("getspellednumber", function() {


  it("input 100", function() {
    var input = ['10'];
    var correctResult= ['ten'];
    var result = tenAndbitsJudge(input);

    expect(result).toEqual(correctResult);
  });

  it("6bits input test", function() {
    var input = ['100'];
    var correctResult= [''];
    var result = tenAndbitsJudge(input);

    expect(result).toEqual(correctResult);
  });
  it("input 1001", function() {
    var input = ['001', '1'];
    var correctResult= ['one','one'];
    var result = tenAndbitsJudge(input);

    expect(result).toEqual(correctResult);
  });

  it("input 12306", function() {
    var input = ['306', '12'];
    var correctResult= ['six', 'twelve'];
    var result = tenAndbitsJudge(input);

    expect(result).toEqual(correctResult);
  });

  it("input 103001", function() {
    var input = ['001', '103'];
    var correctResult= ['one', 'three'];
    var result = tenAndbitsJudge(input);

    expect(result).toEqual(correctResult);
  });

});
