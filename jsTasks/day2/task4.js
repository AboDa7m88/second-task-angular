function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [];

while (true) {
    let input = prompt("Enter a number (0 to stop):");
    let num = Number(input);

    if (isNaN(num)) {
        alert("❌ Please enter a valid number");
        continue;
    }

    if (num === 0) {
        alert("🛑 You stopped entering numbers");
        break;
    }

    numbers.push(num);

    let total = sumArray(numbers);

    if (total > 50) {
        alert("⚠️ You reached the limit!\nLimit = 50\nYour sum = " + total);
        break;
    }
}

alert("✅ Final total = " + sumArray(numbers));