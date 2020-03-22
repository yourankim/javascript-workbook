# 함수
[본문](https://ko.javascript.info/function-basics)


## 전역변수
변수는 연관되는 함수 내에 선언하고, 전역 변수는 되도록 사용하지 않는 것이 좋다. 물론 프로젝트 수준의 데이터를 저장할 때는 전역변수가 유용하게 사용되는 경우도 있다.


## 매개변수
매개변수에 값을 전달하지 않으면 그 값은 `undefined`가 된다.

- 매개변수의 기본값 설정하기
```javascript
  function hello(name, message="안녕하세요?") {
    alert(`${name}님 ${message}`);
  }

  hello("노랑"); // 노랑님 안녕하세요?
  hello("노랑","좋은 아침이에요.");// 노랑님 좋은 아침이에요."
```
함수를 기본값으로 설정할 수도 있다. 함수를 호출할 때마다 매개변수 기본값으로 설정된 함수가 호출된다.
```javascript
  function hello(name, message=getMessageByTime()) {
    alert(`${name}님 ${message}`);
  }

  function getMessageByTime() {
    const now = new Date().getHours();
    if ( now < 6 ) return "잠은 다 잤어요?";
    if ( now < 12 ) return "좋은 아침이에요.";
    if ( now < 18 ) return "뭐하고 있어요?";
    if ( now < 22 ) return "오늘 하루 어땠어요?";
    return "잘 자요."; 
  }

  hello("노랑"); // 노랑님 오늘 하루 어땠어요?
  ```

  ## 반환값
  return문이 없거나 return 지시자만 있는 함수는 `undefined`를 반환한다.

  - 자바스크립트는 return 문 끝에 자동으로 세미콜론을 넣는다. 따라서 return할 값을 표현할 때 줄바꿈을 하면 안된다. 반환하려는 값이 긴 표현식이라면 여러 줄에 걸쳐 작성하더라도 시작만큼은 return과 같은 줄에서 하자. 괄호를 이용하는 것도 좋다.
  ```javascript
  function(){
    return (
      getRandomName() + getRandomMessage() + ....
    )
  }
  ```

  ## 함수 이름짓기
  함수의 이름은 가능한 간결하고 명확하게. 함수의 이름만 보고도 함수가 어떤 기능을 하는지 힌트를 얻을 수 있어야 한다.
  팀 내에서 그 뜻이 합의된 접두어를 붙여 함수를 만드는 게 보통의 관습이다.
  ```javascript
  showMessage() // 메시지를 보여준다.
  getAge() //나이를 나타내는 값을 반환한다.
  calcSum() // 합계를 계산하여 반환한다.
  createForm() // form을 생성 후 반환한다.
  checkPermission() // 승인 여부를 확인 후 boolean값을 반환
  ``` 

  - 함수는 함수 이름에 언급된 하나의 동작만 정확히 수행하도록 만들자.
  ```javascript
  //좋지 않은 예
  function getAge(){
    let age = 0;
    /* 나이를 구해 age 변수에 담는다 */
    alert(`${age}세로 확인되었습니다.`); // --> 적절하지 않음
    return age;
  }
  ```

  ## 함수 == 주석
  함수가 길어지기 시작하면 잘게 쪼갤 때가 되었다는 신호. 간결하고 명확한 함수는 그 자체로 주석의 역할을 할 수 있다.


  ---

  ## 과제

  ### `?`나 `||`를 사용하여 함수 다시 작성하기

  ```javascript
   function checkAge(age) {
     if (age > 18) {
       return true;
     } else {
       return confirm('보호자의 동의를 받으셨나요?');
     }
   }
  ```
  - 물음표 연산자 `?` 사용
  ```javascript
  function checkAge(age) {
    return (age > 18) ? 
      true : confirm("보호자의 동의를 받으셨나요?");
  }
  ```

  - OR 연산자 `||` 사용
  ```javascript
  function checkAge(age) {
    return (age > 18) || confirm("보호자의 동의를 받으셨나요?");
  }
  ```

  ### `min(a,b)` 함수 만들기
  ```javascript
  function min(a,b) {
    return (a > b) ? b : a;
  }
  ```

  ### `pow(x,n)` 함수 만들기
  ```javascript
  function pow(x,n) {
    let result = 1; //초기값을 x로 해도 되겠구나. 그럼 for문의 조건은 i < n 이 된다.)
    for( let i = 1; i <= n; i++ ) {
      result *= x;
    } 
    return result;
  }

  function checkNvalue(n) {
    if( n < 1 ){
      alert("n은 1 이상의 자연수여야 합니다.");
      return false;
    }
    return true;
  }
  
  let x = prompt("제곱할 수를 입력해주세요.");
  let n = prompt(`${x}를 몇 번 곱할까요?`);
  if(checkNvalue(n)){
      alert(`결과: ${pow(x,n)}`);
  }

  ```