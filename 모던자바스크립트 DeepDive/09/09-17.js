// 논리합(||) 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다. 논리합 연산자도 좌항에서 우항으로 평가가 진행된다.

// 논리곱(&&) 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다. 논리곱 연산자는 좌항에서 우항으로 평가가 진행된다.

'Cat' && 'Dog'  // -> "Dog"


// 첫 번째 피연산자 'Cat'은 Truthy 값이므로 true로 평가된다. 하지만 이 시점까지는 위 표현식을 평가할 수 없다.
// 두 번째 피연산자까지 평가해 보아야 위 표현식을 평가할 수 있다. 다시 말해, 두 번째 피연산자가 위 논리곱 연산자 표현식의 평가 결과를 결정한다.
// 이때 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피연산자, 즉 문자열 'Dog'를 그대로 반환한다.

