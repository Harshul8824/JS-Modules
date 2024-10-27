function calculate(s) {
    let stack = [];
    let res = 0;
    let currNum = 0;
    let operation = '+';
    let currChar;
    
    for (let i = 0; i < s.length; i++) {
        currChar = s[i];
        
        if (!isNaN(currChar) && currChar !== ' ') {
            currNum = (currNum * 10) + (currChar - '0');
        }
        
        if ((isNaN(currChar) && currChar !== ' ') || i === s.length - 1) {
            if (operation === '+') {
                stack.push(currNum);
            }
            if (operation === '-') {
                stack.push(-currNum);
            }
            if (operation === '*') {
                let stkTop = stack.pop();
                stack.push(stkTop * currNum);
            }
            if (operation === '/') {
                let stkTop = stack.pop();
                stack.push(Math.trunc(stkTop / currNum));
            }
            
            operation = currChar;
            currNum = 0;
        }
    }
    
    while (stack.length > 0) {
        res += stack.pop();
    }
    
    return res;
}
console.log(calculate("3+2*2"));