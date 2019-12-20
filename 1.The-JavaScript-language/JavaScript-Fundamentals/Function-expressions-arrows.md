# 함수 표현식과 화살표 함수

자바스크립트에서는 함수를 특별한 종류의 *값*으로  취급한다. 
아래와 같이 함수 표현식을 사용해 함수를 생성하고 변수에 할당할 수 있다.

```javascript
let sayHi = function() {
  alert( "Hello" );
};

alert( sayHi ); // 함수 코드가 출력된다.
```
함수를 괄호 없이 호출하면 값으로 취급되고, 괄호를 붙여서 호출하면 함수가 실행된다. (일반적인 코드 블록 끝에는 세미콜론이 붙지 않지만, 위의 함수 표현식은 값으로 취급되어 변수에 할당되었기 때문에 일반 구분과 같이 세미콜론을 붙인다.)

```javascript

let func = sayHi; // 함수가 할당됨
let func2 = sayHi(); // 함수 반환값이 할당됨

```

## 콜백 함수

```javascript
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  function showOk() {
    alert("동의했습니다.");
  }

  function showCancel() {
    alert( "취소 버튼을 눌렀습니다." );
  }

  ask("동의하십니까?", showOk, showCancel);
```

콜백함수는 위의 showOk, showCancel과 같이 함수의 인수로 전달하고 필요시 *나중에* 호출할 수 있는 함수이다.

### 익명함수
```javascript
  ask(
    function() { alert("동의했습니다.") },
    function() { alert("취소 버튼을 눌렀습니다.") }
  ); 
```
콜백함수를 위와 같이 익명 함수로 구현할 수 있다.


## 함수 표현식 vs. 함수 선언문

### 문법
함수선언문은 주요 코드 흐름 중간에 독자적인 구문 형태로 존재한다.
함수 표현식에서 함수는 표현식이나 구문 구성 내부에 생성된다.

### 자바스크립트 엔진의 함수 생성 시점
함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성한다.
함수 선언문은 정의되기 전에도 호출할 수 있다. 자바스크립트가 실행 전 준비단계에서 전역에 선언된 함수 선언문을 찾고 해당 함수를 생성한다. 스크립트는 함수 선언문이 모두 처리된 후 실행된다.

```javascript

sayHi("노랑"); // Hello, 노랑
sayBye("노랑"); //Uncaught ReferenceError: Cannot access 'sayBye' before initialization

function sayHi(name) {
  alert(`Hello, ${name}`);
}

let sayBye = function(name) {
  alert(`Bye, ${name}`);
}
```

### 스코프

엄격 모드에서 함수 선언문은 코드 블록 밖에서 접근할 수 없다. 만약 조건에 따라 함수가 다르게 정의되어야 한다면 함수표현식으로 함수를 정의하고 변수에 할당해 사용할 수 있다.

- 함수 선언문은 선언 전에도 호출할 수 있어 코드 구성이 더 자유롭고, 가독성도 좋다. 되도록 함수 선언문을 사용하고 필요한 경우에 따라 함수 표현식을 사용하자.


## 화살표 함수

```javascript
  let func = (arg1, arg2, ... argN) => expression
  
  let sum = (a, b) => a + b;
  
  let double = n => n * 2; // 인수가 하나면 괄호 생략 가능
  
  let sayHi = () => alert("hi"); // 인수가 없을 땐 괄호 생략 불가

  let welcome = (age < 18) ? 
    () => alert('안녕'):
    () => alert('안녕하세요');

  let sum = (a, b) => {
    let result = a + b;
    return result; // 중괄호를 사용할 경우 return 지시자로 결과를 반환해야 함
  }
```


## 과제

### 화살표 함수로 변경하기

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
    "동의하십니까?",
    () => alert("동의했습니다."),
    () => alert("취소 버튼을 눌렀습니다.")
  );
```