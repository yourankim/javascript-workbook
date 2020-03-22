# 객체

자바스크립트의 일곱가지 자료형 중 객체를 제외한 나머지는 오직 하나의 데이터만 담을 수 있는 원시형(primitive type)이다. 객체는 key와 value로 이루어진 property를 여러 개 저장할 수 있다.

객체를 만드는 두 가지 방법
```javascript
 let user = new Object(); // '객체 생성자' 문법
 let user = {} // '객체 리터럴' 문법
```

## 리터럴과 프로퍼티
```javascript
let user = {
  name: "Norang",
  age: 5,      //trailing or hanging commas
};
```
마지막 프로퍼티 끝에 쉼표를 붙여주면 모든 프로퍼티가 유사한 형태를 보이므로 프로퍼티 추가, 삭제, 이동이 쉬워진다.

[Trailing commas - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Trailing_commas)


### 프로퍼티 값 얻기(점 표기법)
```javascript
alert( user.name ); 
alert( user.age );
```

### 프로퍼티 추가
```javascript
user.isAdmin = true;
```

### 프로퍼티 삭제
```javascript
delete user.age;
```


## 대괄호 표기법 Square bracket notation

여러 단어로 이루어진 프로퍼티 이름은 따옴표로 묶어 준다.
```javascript
let user = {
  name: "Norang",
  age: 5,
  "likes birds": true, 
}
```
여러 단어를 조합해 만든 프로퍼티 키는 점 표기법으로 읽을 수 없다. (유효한 변수 식별자가 아님 -> 공백이 있으면 유효하지 않음)
대신 대괄호 표기법을 사용할 수 있다.

```javascript
let user = {};

// set
user["likes birds"] = true; 
// get
alert(user["likes birds"]);
// delete
delete user["likes birds"];
```

대괄호 표기법을 사용하면 문자열 뿐 아니라 모든 표현식의 평가 결과를 프로퍼티 키로 사용할 수 있다.

```javascript
let key = "likes birds";

user[key] = true;
```

변수를 key로 사용하면 코드를 유연하게 작성할 수 있다.

```javascript
let user = {
  name: "Norang",
  age: 5,
};

let key = prompt("사용자의 어떤 정보를 얻고 싶으세요?", "name");

alert( user[key] ); // 입력한 key 이름에 따라 결과가 달라짐
```

## 계산된 프로퍼티

객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우

```javascript
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
  [fruit]: 5, // 프로퍼티 이름을 변수 fruit에서 가져옴
}

let cart = {
  [fruit + 'Computers']: 5 // 대괄호 안에 복잡한 표현식을 사용할 수 있음
}
```

`for`, `let`, `return` 같은 예약어도 프로퍼티 이름으로 사용할 수 있다.
단, 키가 `__proto__`인 프로퍼티의 값에는 객체만 올 수 있다.
```javascript
let obj = {};
obj.__proto__ = 5;
alert(obj.__proto__); // 원시값 5는 무시되고 [object object] 출력
```


## 단축 프로퍼티 property value shorthand

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  }
}

let user = makeUser("Norang", 5);
alert(user.name);
```
프로퍼티 값을 기존 변수에서 받아와 사용하는 경우, 키와 변수의 이름이 동일할 수 있다. 이럴 때 단축 프로퍼티를 사용하여 코드를 짧게 줄일 수 있다.
```javascript
function makeUser(name, age) {
  return {
    name,
    age,
    isAdmin: false, // 일반 프로퍼티도 함께 사용 가능
  };
}
```

## 프로퍼티 존재 여부 확인하기

자바스크립트에서는 객체에 존재하지 않는 프로퍼티에 접근을 시도해도 에러 발생 대신 `undefined`를 반환한다.

```javascript
let user = {};
alert( user.noSuchProperty === undefined ); // true면 존재하지 않음
```
### `in` 연산자
in 왼쪽에는 반드시 따옴표로 감싼 문자열 형식의 프로퍼티 이름이 와야 한다.

```javascript
let user = {
  name: "Norang",
  age: 5,
};

alert( "age" in user ); //true
alert( "likes birds" in user ); //false
```

### 값이 undefined인 프로퍼티에 `in` 사용하기

```javascript
let obj = {
  test: undefined,
}

alert( obj.test ); // udefined를 반환하지만 프로퍼티는 존재한다.
alert( "test" in obj ); // true,  정확히 프로퍼티 존재여부를 확인할 수 있다.
```

- 값을 알 수 없거나 비어 있는 변수에는 `null`을 사용하자.

## `for...in` 반복문

객체의 모든 키 순회하기

```javascript
let user = {
  name: "Norang",
  age: 5,
  isAdmin: true,
};

for( let key in user ) {
  alert( key ); // name, age, isAdmin
  alert( user[key] ); // Norang, 5, true
}
```

## 객체 정렬 방식
객체는 '특별한 방식으로 정렬'된다. 정수 프로퍼티는 자동으로 정렬되고, 그 외의 프로퍼티는 추가한 순서대로 정렬된다.

- 정수 프로퍼티: 변형 없이 정수와 문자열 상호 변환이 가능한 문자열. "49"는 정수 프로퍼티지만 "+49", "1.2"는 정수 프로퍼티가 될 수 없다. (Math.trunc()와 같은 함수를 이용해 문자열을 정수로 변환하면 실수나 부호가 붙은 숫자 문자열은 변형된다.)

정수 프로퍼티가 입력 순으로 정렬되게 하려면 `+`를 붙일 수 있다.

## 참조에 의한 복사

원시값은 값 그대로 저장/할당 및 복사되지만 객체는 '참조에 의해(by reference)' 저장되고 복사된다.

```javascript
let user = { name: 'Norang' };
let admin = user; // 객체가 아닌 객체의 참조값이 복사됨
admin.name = 'Hobak'; // admin의 참조값이 변경
alert(user.name); // admin과 user가 같은 값을 참조하고 있으므로 'Hobak'이 출력됨 
```


## 참조에 의한 비교

객체 비교에서는 등등 연산자와 일치 연산자가 동일하게 동작한다. 피연산자인 두 객체가 동일한 객체(같은 값을 참조)인 경우에만 참을 반환한다.

```javascript
let a = {};
let b = {};

alert(a == b); // 독립된 객체이므로 false

let b = a;
alert(a == b); // true
```
객체를 원시값과 비교하면 객체가 원시형으로 변환된다.
(객체의 원시형 변환은 추후 학습)


## const 객체

`const`로 선언한 객체의 값은 변경할 수 있다. const는 오직 user에 저장된 값(객체에 대한 참조 값)만 고정한다.
```javascript
const user = {
  name: "Norang",
};

user.age = 5;

alert(user.age); // 5

// TypeError: 객체 재정의는 불가
user = {
  name: "Cheese";
}

```


## 객체 복사와 병합

참조값이 아닌 객체 자체를 복제하고 싶다면 새로운 객체를 만든 후 기존 객체의 프로퍼티들을 순회해 원시 수준까지 프로퍼티를 복사하면 된다.

```javascript
let user = {
  name: "Norang",
  age: 5,
}

let clone = {};

for( key in user ) {
  clone[key] = user[key];
}
```

또는 `Object.assign`을 사용할 수 있다.
```javascript
Object.assign(dest, [src1, src2, src3...]);
```

객체배열 `[src1, src2, src3...]`의 프로퍼티를 `dest`에 복사한 후 `dest`를 반환한다. 
복사된프로퍼티를 받는 객체에 동일한 이름을 가진 프로퍼티가 있으면 기존 값을 덮어쓴다.

```javascript
let user = {
  name: "Norang",
  age: 5,
};

let clone = Object.assign({}, user); 
```

### 깊은 복사(deep cloning)
객체를 복사할 때 프로퍼티의 값이 객체일 경우 그 객체의 구조도 복사해주는 반복문을 사용하는 방법

- [Structured cloning algorithm](https://html.spec.whatwg.org/multipage/structured-data.html#safe-passing-of-structured-data)
- [lodash의 `_cloneDeep(obj)`](https://lodash.com/docs#cloneDeep)



지금까지 알아본 객체는 순수 객체(plain object)이고, 이 밖에 `Array`, `Date`, `Error` 등 다양한 종류의 객체가 있다.

