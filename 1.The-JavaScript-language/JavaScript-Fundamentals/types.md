# 자료형 
[본문](https://ko.javascript.info/types)

자바스크립트는 변수의 타입을 언제든지 바꿀 수 있는 *동적 타입 dynamically typed* 언어. 일곱 가지 기본 자료형이 있다.

## 숫자형 number

정수, 부동소수점 숫자, 특수 숫자값 (Infinity, -Infinity, NaN)

```javascript
alert( 1 / 0 ); // Infinity
alert( -5 / 0 );
alert( "홈런볼" / 10 ); 
```

## 문자형 string

큰 따옴표와 작은 따옴표에 차이를 두지 않는다.
역따옴표(backtick)는 원하는 변수나 표현식을 문자열 중간에 쉽게 넣을 수 있게 해준다.

```javascript
const name = prompt("함께 사는 고양이의 이름은 무엇인가요?");
alert(`${name}님 안녕하세요?`); 
```

자바의 char와 같은 한 글자 단위의 문자형은 없다.



## 불린형 boolean

## null
다른 언어에서는 null을 "존재하지 않는 객체에 대한 참조" 또는 "널 포인터"를 나타낼 때 사용한다. 하지만 자바스크립트에서는 "존재하지 않는 값"(nothing), "비어 있는 값"(empty), "알 수 없는 값"(unknown)을 나타내는 데에 사용한다.

## undefined

값이 할당되지 않은 상태를 나타낸다. 
변수에 직접 undefined를 할당할 수도 있지만 권장되지는 않는다. 변수가 비어있거나 알 수 없는 상태를 나타내려면 null을 사용하고, undefined는 변수에 값이 할당되어 있는지를 확인할 때 사용하자.

## 객체와 심볼 object and symbol
심볼형은 객체의 고유한 식별자를 만들 때 사용한다.

## typeof 연산자

typeof() 와 typeof 어느 것을 사용하든 결과는 동일하다.

```javascript
alert( typeof('꽁무니') ); //string
alert( typeof '꽁무니' ); //string
```

특수한 경우
```javascript
alert( typeof Math ) //object -> 내장 객체도 객체형이다.
alert( typeof null ) //object ->  null은 객체형이 아니지만 언어 자체의 과거 오류가 호환성 유지를 위해 남아있으므로 유의
alert( typeof alert ) //function -> 자바스크립트에서는 함수도 객체형이지만 typeof 연산자로 함수를 타입체크하면 function을 반환한다. 
```