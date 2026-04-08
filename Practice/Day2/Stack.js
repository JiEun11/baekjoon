const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop(); // 3 꺼냄
stack.at(-1); // 맨 위 확인만 (꺼내지 않음)

// NOTE: 절대 쓰면 안 되는 것: stack.shift() => O(N), stack.pop() => O(1)
