const num1 = parseFloat( prompt('Enter nr1: '));
const num2 = parseFloat( prompt('Enter nr1:'));
const operator = prompt('(+, -, /, *)');
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong Input! Refresh the page again and provide data!');
}else{
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2
    }
    document.write(num1 + operator + num2 + '=' + result);
}
