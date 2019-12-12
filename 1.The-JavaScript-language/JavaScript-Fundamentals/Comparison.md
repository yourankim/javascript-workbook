# 비교 연산자 [본문](https://ko.javascript.info/comparison)

## 문자열 비교

사전 찾기 알고리즘과 유사하게 크기를 판별하지만 
자바스크립트의 문자열 비교는 유니코드순이다. 
```javascript
alert( "자바스크립트" > "javascript" ); //true
alert( "aaaaa" > "AAAAA" ); //true
alert( "5" > "132" ) //true
```

### 다른 형을 가진 값 간의 비교 

서로 자료형이 다른 값을 비교할 때는 값을 숫자형으로 바꾼다. 
숫자로 변환이 불가능한 일반 문자열은?
```javascript
alert( "02.50" == 2.5 ); //true
alert( "1" == true); //true
alert("A" == 65); // false : 문자가 ascii 숫자코드로 변환되지는 않는다.
```

불린값의 숫자 변환
```javascript
alert( true == 1 ); //true
alert( false == 0 ); //true

//흥미로운 상황 -- Boolean을 사용한 명시적 변환?
let a = 0;
alert( Boolean(a) ); //false
let b = "0";
alert( Boolean(b) ); //true
alert( a == b ); // true
```

## 일치연산자
자료형을 변환하지 않고 값을 비교할 수 있다.
```javascript
alert( 0 == false ); // true
alert( 0 === false ); // false
```

## null이나 undefined와 비교하기

```javascript
alert( null === undefined ); //false: 자료형이 다르다
alert( null == undefined); // true: 두 값을 서로를 비교할 때만 true를 반환한다.
```

동등,일치 연산자가 아닌 산술, 여타 비교연산자로 비교하면 null은 0으로, undefined는 NaN으로 바뀐다.

```javascript
alert( null > 0 ); //false
alert( null == 0 ); //false: 동등연산에서는 숫자형으로 변환되지 않는다.
alert( null >= 0 ); //true
```

undefined는 NaN으로 변환된다. NaN이 피연산자가 되면 어떤 값과 비교해도 항상 false를 반환한다. 따라서 undefined는 자기자신과 비교하거나 null과 동등비교할 때만 true를 반환한다.


- `undefined`나 `null`이 될 가능성이 있는 변수가 `>`나 `<`의 피연산자가 되지 않도록 주의하자. 
- 연산자를 사용할 때는 `null/undefined` 여부를 확인하는 코드를 따로 추가하는 습관을 들이자.



