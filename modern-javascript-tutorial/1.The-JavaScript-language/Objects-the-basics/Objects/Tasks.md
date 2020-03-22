## 객체야 안녕?

```javascript
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user name;
```


## 객체가 비어있는지 확인하기
`test`

비어있으면 `true`를 반환하는 `isEmpty(obj)` 함수 만들기

1. 처음 생각한 코드
```javascript
function isEmpty(obj) {
  let count = 0;
  for( key in obj ) {
    count++;
  }
  return !Boolean(count);
}
```
2. 해답을 본 후: 굳이 끝까지 카운트를 셀 필요가 없다. 프로퍼티가 하나라도 있으면 바로 false를 리턴하면 된다.

## 변하지 않는 객체?

`const`로 선언한 객체를 변경하는 것이 가능할까?
```javascript
const user = {
  name: "Norang"
}
user.name = "Cheese"; // ??
```
const는 ~~객체의 `참조값`을 고정할 뿐 각 프로퍼티의 값을 고정시키지는 않는다.~~ *한 번이라도 값을 할당한 변수가 변경되지 못하게 한다*  프로퍼티의 값 변경은 물론, 프로퍼티 자체를 삭제하거나 추가하는 것도 가능하지만 const를 생성자나 리터럴 문법으로 다시 정의하거나 다른 객체의 참조값을 할당할 수 없다.

```javascript
user.name = "Cheese"; // Cheese
delete user.name; // true
user.age = 5; // true

user = {}; // Uncaught TypeError: Assignment to constant variable.
user = new Object(); // Uncaught TypeError
let admin = { name: "Cheese" };
user = admin; // Uncaught TypeError

let user_copy = user;
console.log(user_copy === user); // true : 같은 값을 참조한다.
user = user_copy; // Uncaught TypeError: 같은 참조값을 가진 객체라도 재할당은 불가능

```

## 프로퍼티 합계 구하기
`test`

팀원들의 월급 정보를 담고 있는 객체에서 모든 팀원의 월급 합계를 구해 `sum`에 저장하기
(팀원이 없으면 `sum`의 값은 0)
```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

```javascript
 let sum = 0;

for( member in salaries) {
  sum += salaries[member];
}

console.log(sum);
```


## 프로퍼티 값 두 배로 부풀리기
`test`

주어진 객체의 프로퍼티 타입이 숫자면 
값을 두 배로 크게 만들어주는 함수 `multiplyNumeric(obj)` 

```javascript
function multiplyNumeric(obj) {
        for ( key in obj ) {
          let type = typeof obj[key];
          if( type == "number") {
            obj[key] *= 2;
          }
        }
      }
```