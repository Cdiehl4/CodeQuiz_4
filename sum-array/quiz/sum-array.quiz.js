var expect = chai.expect;

describe("sumArray", function() {
  it("returns the total of all the numbers in `arr`", function() {
    var arr = [4, 9, 17, 21, 27, 39];

    var result = sumArray(arr);

    expect(result).to.eql(117);
  });
});