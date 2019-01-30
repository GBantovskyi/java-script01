// let greetings;
// alert(greetings);

// Data Types: 
// string
// boolean - true, false
// number
// null
// undefined
// Object
// Symbol


const name = prompt('Enter your name');
const msg = 'Hello, ' + name;
alert(msg);

const age = parseFloat(prompt('Enter your age'));
//const newAge = age + 1;
//alert(newAge);
alert('You are ' + checkAge(age));




function add(a, b, c) {
    const res =a + b + c;
    return res;
}

const total = add(2, 2, 2);
alert(total);


function checkAge(age) {
    if (age <= 18) {
        return 'child';
        
    } else {
        return 'adult';
        
    }
}