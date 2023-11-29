var expect = chai.expect;

before(function() {
  window._temp = {};
  window._temp.log = console.log;
  window.console.log = (function(...args) {
    var values = [];

    var log = function(args) {
      values.push(args);
      window._temp.log(args);
    };

    log.calledWith = function() {
      return values;
    };

    return log;
  })();
});

describe("logNums", function() {
  it("should log numbers 0 through `num`", function() {
    var num = 7;

    logNums(num);

    expect(console.log.calledWith()).to.eql([0, 1, 2, 3, 4, 5, 6]);
  });
});

after(function() {
  console.log = window._temp.log;
  delete window._temp;
});
