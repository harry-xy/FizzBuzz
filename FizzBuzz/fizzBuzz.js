document.querySelector('#press').addEventListener('click', run)


let output = "";

function run() {
    let inputNum = Number(document.querySelector('#yourNum').value)
    if (inputNum < 10000) { inputNum = 1}
    for( let i=1; i<= inputNum; i++){

        if (i % 15 == 0) {
            output = " FizzBuzz "}
            
        else if (i % 3 == 0) {
             output = " Fizz " }

        else if (i % 5 == 0) {
            output = " Buzz " }

        else (output = i);
        
        23
document.querySelector('#zebra').innerText += ` ${output} `;

console.log(output);
        }
}




// =========================================================

//  for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)}