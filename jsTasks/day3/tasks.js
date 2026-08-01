// between each question there is a line in comment, please un-comment the question one by one



// question 1: count how many 'e' in a string

// let str = prompt("Enter a string:");
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'e') {
//         count++;
//     }
// }
// console.log(`Number of 'e' = " + ${count}`)
// alert("Number of 'e' = " + count);
//--------------------------------------------------------------------//

// question 2: find if a word palindrome or not

// let text = prompt("Enter a word:");

// let reversed = "";

// for (let i = text.length - 1; i >= 0; i--) {
//     reversed += text[i];
// }

// if (text === reversed) {
//     alert("✅ Palindrome");
//     console.log(`${text} ✅ Palindrome`)
// } else {
//     alert("❌ Not Palindrome");
//     console.log(`${text} ❌ Not Palindrome`)
// }
//--------------------------------------------------------------------//

// question 3: Adding - Multipling and Dividing 3 elements

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     let num = Number(prompt("Enter number " + (i + 1) + ":"));
//     arr.push(num);
// }

// let sum = arr[0] + arr[1] + arr[2];
// let mul = arr[0] * arr[1] * arr[2];
// let div = arr[0] / arr[1] / arr[2];

// let result =
//     "Sum = " + sum +
//     "\nMultiplication = " + mul +
//     "\nDivision = " + div;

// alert(result);
// console.log(result);
//--------------------------------------------------------------------//

// question 4: sorting an array (descending and ascending)

// let numbers = [];

// for (let i = 0; i < 5; i++) {
//     let num = Number(prompt("Enter number " + (i + 1) + ":"));
//     numbers.push(num);
// }

// let asc = [...numbers].sort((a, b) => a - b);
// let desc = [...numbers].sort((a, b) => b - a);

// let result = 
//     "Original = " + numbers +
//     "\nAscending = " + asc +
//     "\nDescending = " + desc;

// alert(result);
// console.log(result);
//--------------------------------------------------------------------//

// question 5: circule reduis 

// let radius = Number(prompt("Enter the radius:"));

// if (isNaN(radius) || radius <= 0) {
//     alert("❌ Invalid input");
//     console.log('❌ Invalid input')
// } else {
//     let area = Math.PI * radius * radius;
//     alert("✅ Area = " + area);
//     console.log(`✅ Area = " + ${area}`)
// }
