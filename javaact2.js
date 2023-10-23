
// 1. Create a loop that runs from 0 to 9.
        
    for (let i =0; i <= 9; i ++) {
            console.log(i)
        }

// 2. Create a loop that runs from 9 to 0.

        for (let i =9; i >= 0; i --)  {
            console.log(i)
        }

// 3. Create a while loop that runs as long as i is less than 10.
        
        let i = 0;
             while (i < 10) {
            console.log(i);
            i++;
        }


// 4. Create a while loop that runs as long as i is less than 100, but increase i with 2 each time.
        let j = 0;

        while (j < 100) {
            console.log(j);
                j += 2;
        }

// 5. Look at the following code that shows even numbers (divisible by 2) between 1 and 10.
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// }
// // This program uses the modulo operator %, which calculates the remainder after division of one number by another.
// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
//Improve the program so that it also shows odd numbers. 

        console.log(10 % 2)
        console.log(7 % 3)
        console.log(100 % 50)
        console.log(9 % 2)

for(let 1=1; i <= 10; i++) {
    if (i % 2 ===0) {
        console.log( `$(i) is even`);
    } else if(i % 2 ===1){
        console.log(`$(i) is odd`)
    }
}

/* Bonus: FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "Fizz Buzz" instead for numbers divisible both by 3 and by 5. */

for(let i = 0; i<=100; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz")
    } else if(i % 3 ===0){
        console.log("Fizz")
    } else if(i %5 === 0){
        console.log("Buzz")
        else{
            console.log(i)
        }
    }
}