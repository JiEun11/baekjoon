const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const queue = [];
/* start는 실제로 큐의 맨 앞 원소, end는 큐의 맨뒤 원소가 들어갈 자리 */
let start = 0, end = 0; 

/*push X : 정수 X를 큐에 넣는 연산*/
const push = (x) => {
    queue[end++] = x;
}

/*pop : 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 
만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.*/
const pop = () => {
   const s = size();
   if (s === 0) {
       return -1;
   }
   // 가장 앞에 있는 정수를 저장한다.
   const head = queue[start++];   
   return head;  
}


/*size : 큐에 들어있는 정수의 개수 출력*/
const size = () => {
   return end-start;
}


/*empty : 큐가 비어있으면 1, 아니면 0 출력*/
const empty = () => {
   const s = size();
   if (s === 0) {
       return 1;
   } else {
       return 0;
   }
}


/*front : 큐의 가장 앞에 있는 정수를 출력. 큐에 정수 없다면 -1 출력*/
const front = () => {
    const s = size();
    if (s === 0) {
        return -1;
    }
    return queue[start];
}


/*back : 큐의 가장 뒤에 있는 정수를 출력. 큐에 정수 없다면 -1 출력*/
const back = () => {
    const s = size();
    if (s === 0) {
        return -1;
    } 
    return queue[end - 1]; 
}


const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
    const parts = input[i].trim().split(' '); // 공백으로 분리
    const cmd = parts[0];
    
    if (cmd === 'push') {
        const x = parseInt(parts[1]);
        push(x);   
    }
    else if (cmd === 'pop') {
        console.log(pop());
    }
    else if (cmd === 'size') {
        console.log(size());
    }
    else if (cmd === 'empty') {
        console.log(empty());
    }
    else if (cmd === 'front') {
        console.log(front());
    }
    else if (cmd === 'back') {
        console.log(back());
    }
}