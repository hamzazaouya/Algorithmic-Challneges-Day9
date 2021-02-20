/*global*/

let print = document.getElementById('demo');
let result = 1;
let output = '';

function mother() {

    function calc(num) {

        for (let i = 1; i <= 10; i++) {

            result = num * i;

            output += num + " * " + i + " = " + result + "<br />";

        }

        return output;

    }
    
    return calc;
}

let calcNumber = mother();

let calc2 = calcNumber(2);
print.innerHTML = calc2;

let calc3 = calcNumber(3);
print.innerHTML = calc3;

let calc4 = calcNumber(4);
print.innerHTML = calc4;