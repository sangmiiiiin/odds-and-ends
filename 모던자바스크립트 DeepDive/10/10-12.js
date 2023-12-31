// 마침표 프로퍼티 접근 연산자 또는 대괄호 프로퍼티 접근 연산자의 좌측에는 객체로 평가되는 표현식을 기술한다.
// 마침표 프로퍼티 접근 연산자의 우측 또는 대괄호 프로퍼티 접근 연산자의 내부에는 프로퍼티 키를 지정한다.

var person = {
    name: "Lee",
};
console.log(person.name);
// 대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.
// 대괄호 프로퍼티 접근 연산자 내에 따옴표로 감싸지 않은 이름을 프로퍼티 키로 사용하면 자바스크립트 엔진은 식별자로 해석한다.
console.log(person['name']);




var person = {
    name: "kim"
};


console.log(person.name);
console.log(person['name']);
console.log(person["name"]);
console.log(person.age);            // undefined
// 객체에 존재하지 않는 프로퍼티 키 값을 참조하면 Error를 발생시키지 않고 undefined를 반환한다.
