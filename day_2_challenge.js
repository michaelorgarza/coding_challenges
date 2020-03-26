// day 2 challenge 1

// console.log("------ Challenge # 1 -----")

// let numberPrinter = (input) => {
//     if(input > 0) {
//     for (let i = -1; i <= input; i++){
//         console.log("Iteration #", i);
//     }
//     if(input < 0 ){
//         for (let i = -1; i >= input; i--){
//             console.log(i);
//         }
//     }
//     if(input === 0) {
//         console.log('not very funny')
//     }
//     }
// }
// numberPrinter(0);

console.log("------ Challenge # 2 ------")

// day 2 challenge 2

let three = 3;
let five = 5;
let fifteen = 15;

let fizzBuzz = input => {
    for (let i = 1; i <= input; i++){
        if (i % fifteen == 0){
            console.log(i, `FizzBuzz`)
        }
        else if( i % three == 0){
            console.log(i, `Fizz`)
        }
        else if (i % five == 0){
            console.log(i, `Buzz`);
        }
        else {
            console.log(i)
        }
    }
}
fizzBuzz(100);
