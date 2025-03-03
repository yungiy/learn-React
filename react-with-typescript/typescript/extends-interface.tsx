/*
인터페이스
  1. 여러번 선언하면 자동으로 병합됨
  2. 객체의 구조를 정의하는데 주로 사용
  3. 클래스에서 implements 키워드로 사용
타입
  1. 같은 이름으로 중복 선언
  2. 객체뿐만 아니라 유니온(|), 튜플 등 다양한 타입 정의 가능
  3. extends 대신 &으로 확장 가능

*/

interface User {
  name: string;
}

interface User {
  age: number;
}

// 병합된 결과:
interface User {
  name: string;
  age: number;
}

type Person = {
  name: string;
};

type Person2 = {
  age: number;
}; // 오류 발생