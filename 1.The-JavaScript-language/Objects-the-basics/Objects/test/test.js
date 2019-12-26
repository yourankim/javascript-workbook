describe("isEmpty", function() {
  it("객체가 비어있으면 true", function() {
    assert.isTrue(isEmpty({}));
  });
  
  it("객체에 프로퍼티가 있으면 false", function() {
    assert.isFalse(isEmpty({ name: "Norang"}));
  });

});

describe("calcSalarySum", function() {
  it("월급이 각각 100, 160, 130인 팀원들의 월급 합계는 390", function() {
    assert.equal(calcSalarySum({
      John: 100,
      Ann: 160,
      Pete: 130
    }), 390);
  });

  it("팀원이 없으면 0을 반환", function() {
    assert.equal(calcSalarySum({}), 0);
  });
})

describe("multiplyNumeric", function() {
  it("모든 숫자형 프로퍼티의 값을 2배로 만든다", function() {
    let obj = {
      width: 400,
      height: 600,
      title: "My menu"
    };

    multiplyNumeric(obj);

    assert.equal(obj.width, 800);
    assert.equal(obj.height, 1200);
    assert.equal(obj.title, "My menu");

  });
})