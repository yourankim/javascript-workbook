# 테스트 자동화와 Mocha
[본문](https://ko.javascript.info/testing-mocha)

## 테스트는 왜 해야 하는가?
코드를 수동으로 재실행하며 테스트하면 무언가를 놓치기 쉽다.
테스팅 자동화는 테스트 코드가 실제동작에 관여하는 코드와 별개로 작성되었을 때 가능하다. 

## Behavior Driven Development (BDD)

스펙을 먼저 작성한 구 구현을 시작한다.

**스펙 작성으로 얻을 수 있는 것들**
- test: 함수가 의도하는 동작을 제대로 수행하는지 보장
- documentation: 함수가 어떤 동작을 수행하는지 설명
- example: 실제 동작 예시를 이용해 사용 방법을 알려 줌

스펙이 있으면 함수를 안전하게 개선하거나 변경할 수 있다.

### 개발 순서
1. 명세서 초안 작성(기본적인 테스트 포함)
2. 명세서 초안에 따라 코드 작성
3. 테스트 프레임워크를 사용해 명세서를 실행하여 코드가 작동하는지 확인
 3-1. 에러가 발생하면 코드를 수정
4. 모든 테스트를 통과하는 코드 초안 완성
5. 유스케이스 추가
6. 다시 모든 테스트가 통과할 때까지 코드 수정
7. 기능 완성까지 3-6단계 반복


### 명세서(specification, spec)

x를 n번 곱해주는 거듭제곱 함수 `pow(x, n)`를 개발한다면.
(n은 자연수, n >= 0)

```javascript
describe("pow", function() {
  it("주어진 숫자의 n 제곱", function() {
    assert.equal(pow(2, 3), 8);
  });
});
```

`describe("title", function() {...})`
구현하고자 하는 기능 정의 및 it 블록 묶기
`it("유스 케이스 설명", function() {...})`
각 유스케이스 정의
`assert.equal(value1, value2)`
테스트 결과 비교

### 코드 초안 


### 스펙 실행하기

브라우저, 서버 사이드 환경을 가리지 않고 사용 가능한 테스트 라이브러리
- Mocha - `describe`,`it`과 같은 테스팅 함수와 테스트 실행 관련 주요 함수 제공
- Chai - `equal`을 비롯한 다양한 assertion 제공
- Sinon - 함수의 정보를 캐내는 데 사용되는 라이브러리(내장 함수 등을 모방)

### 스펙 개선하기
테스트 추가하기
1. 기존 it 블록에 assert 추가
2. it 블록을 추가

assert에서 에러가 발생하면 it 블록은 즉시 종료된다. 1처럼 기존 it에 assert를 추가하면 테스트 중간에 에러가 발생할 경우 다음 테스트의 결과를 확인할 수 없다.

- 두번째 방법처럼 it 블록을 하나 추가해 테스트를 분리하자.
- 하나의 테스트에서는 한 가지만 확인하자.

### 코드 개선하기

### it 블록 자동으로 추가해 더 많은 경우의 수를 테스트하기

### 중첩 describe
describe 안에 테스트 하위 그룹을 만들기 위한 describe를 정의할 수 있다.

### `before/after`와 `beforeEach/afterEach`
`before/after` 전체 테스트 실행 전후
`beforeEach/afterEach` 매 테스트(`it`) 실행 전후

카운터 변수를 0으로 만들거나 테스트가 바뀔 때마다 해야 하는 작업이 있을 때 등 초기화 용도로 주로 사용

### 스펙 확장하기
매개변수 조건 검사 등 다양한 예외를 고려한 기능 개선

### 다양한 assertion
[mocha 문서 확인](https://www.chaijs.com/api/assert/)



## 과제

### 잘못된 점 찾기
```javascript
it("주어진 숫자의 n 제곱", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
```
문법 오류는 없고 테스트는 모두 통과한다.

1. 내가 생각해 본 잘못된 점
 각 테스트가 독립되어 있지 않다. 하나의 변수를 가지고 첫번째 테스트로 결과값을 얻고, 그 결과가 올바르다는 가정 하에 다음 테스트를 진행한다. 이전 테스트가 성공해야만 다음 테스트를 수행할 수 있기 때문에 테스트가 실패해도 정확히 어떤 부분에서 잘못 되었는지 확인하기 어렵다.

2. 해답에서 얻은 것
`assert`는 세 개지만 결과적으로 테스트 함수는 하나다. 작성은 쉬울 수 있지만 실행 흐름이 복잡해진다. 에러가 발생하면 에러를 만든 입력값이 무엇인지 일일이 확인해야 한다.

- 테스트는 명확한 입력값, 출력값과 함께 여러 개의 it블록으로 쪼개 작성하는 것이 좋다.

개선된 코드

```javascript

describe("주어진 숫자의 n 제곱", function(){

  it("5의 1 제곱은 5", function() {
  assert.equal(pow(5, 1), 5);
  });

  it("5의 2 제곱은 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5의 3 제곱은 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});

```

it 블록을 여러 개로 쪼개면 `it.only`를 사용해 특정 테스트만 실행해 볼 수도 있다.

```javascript
 it.only("5의 2 제곱은 25", function() {
    assert.equal(pow(5, 2), 25);
  });
```

* `mocha.setup()` 
mocha doc - [Browser configuration](https://mochajs.org/#browser-configuration)


