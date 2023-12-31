// 함수는 일급 객체 이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
// 이러한 함수 정의 방식을 함수 표현식이라 한다.

// 함수 표현식
var add = function (x, y) {
    return x + y;
};

console.log(add(2, 5));

// 함수 리터럴의 함수 이름은 생략할 수 있다.
// 이러한 함수를 "익명 함수"라 한다.
// 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.
// 함수를 호출할 때는 함수 이름이 아니라 함수 객체를 가리키는 식별자를 사용해야한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로 함수 이름으로 함수를 호출 할수 없다.
