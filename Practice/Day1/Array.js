const numbers = [3, 1, 4, 1, 5, 9];

// 각 요소에 연산 적용해서 새 배열 만들기
const doubled = numbers.map((number) => number * 2);

// 필터 : 조건에 맞는 요소만 추출
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// 축약 : 배열 전체를 하나의 값으로 줄이기
const total = numbers.reduce((accumulator, number) => accumulator + number, 0);

// 정렬 : 기본 sort()는 문자열 기준이라 숫자는 반드시 비교함수 필요
const sorted = [...numbers].sort((a, b) => a - b);
