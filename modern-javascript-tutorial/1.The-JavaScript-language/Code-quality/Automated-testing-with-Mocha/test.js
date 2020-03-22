describe("pow", function() {
  /*
  1. 스펙 초안
  it("주어진 숫자의 n 제곱", function() {
    assert.equal(pow(3, 4), 8);
  });
  */

  /*
  2. 테스트 추가
  it("2를 세 번 곱하면 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3를 세 번 곱하면 27", function() {
    assert.equal(pow(3, 3), 27);
  });
  */

  // 4. 중첩 describe로 테스트 하위그룹 만들기(헬퍼함수 makeTest와 for문을 한 그룹으로)
  describe("x를 세 번 곱하기", function() {
    // 3. 테스트 자동으로 추가
    function makeTest(x){
      let expected = x * x * x;
      it(`${x}를 세 번 곱하면 ${expected}`, function() {
        assert.equal(pow(x,3), expected);
      })
    }

    for(let i = 1; i < 10; i++) {
      makeTest(i);
    }
  });

  //5. 스펙 확장
  it("n이 음수일 때 결과는 NaN", function() {
    assert.isNaN(pow(2,-1));
  })

  it("n이 정수가 아닐 때 결과는 NaN", function() {
    assert.isNaN(pow(2, 1.5));
  })
  
});