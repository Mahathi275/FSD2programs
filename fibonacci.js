let n = 21;
let a = 0, b = 1, c;

while (a < n) {
    if (a == n) break;
    c = a + b;
    a = b;
    b = c;
}

if (a == n)
    console.log("Fibonacci Number");
else
    console.log("Not a Fibonacci Number");


