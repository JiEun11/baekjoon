// Object 방식
/**
 * @description Object 방식
 * 키가 문자열이고 간단한 경우
 * 
 */
const frequencyMap = {};

const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

fruits.forEach((fruit) => {
    frequencyMap[fruit] = (frequencyMap[fruit] || 0) + 1;
});

console.log(frequencyMap);

//
/**
 * @description Map 방식
 * 키가 숫자/다른 타입이거나, 크기(.size)가 필요하거나, 순서가 중요한 경우
 */
const visitCount = new Map();

const pages = ["/home", "/about", "/home", "/contact", "/home"];

pages.forEach((page) => {
    const currentCount = visitCount.get(page) || 0;
    visitCount.set(page, currentCount + 1);
});

console.log(visitCount.get("/home"));
