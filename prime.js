// Hardcoded positive integer to check
const number = 29;

function isPrime(num) {
    // 1 or numbers less than 1 are not prime
    if (num <= 1) {
        return false;
    }
    
    // Check for factors up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a factor, so it's not prime
        }
    }
    
    return true; // No factors found, it is prime
}

// Execute the check and display the result
if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is NOT a prime number.`);
}

