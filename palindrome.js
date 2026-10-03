// Change this value to test different numbers
const number = 11; 

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to check if a number is a palindrome
function isPalindrome(num) {
    const str = num.toString();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Main Logic
if (isPrime(number)) {
    let nextNum = number + 1;
    while (!isPalindrome(nextNum)) {
        nextNum++;
    }
    console.log(`Next palindrome: ${nextNum}`);
} else {
    console.log("not prime");
}
