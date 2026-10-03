let dob = "15 08 2005";
let sum = 0;

for (let ch of dob) {
    if (ch >= '0' && ch <= '9')
        sum += Number(ch);
}

while (sum > 9) {
    let n = 0;
    while (sum > 0) {
        n += sum % 10;
        sum = Math.floor(sum / 10);
    }
    sum = n;
}

let names = {
    1: "Legend",
    2: "Princess",
    3: "Leader",
    4: "Warrior",
    5: "Explorer",
    6: "Star",
    7: "Genius",
    8: "Champion",
    9: "King"
};

console.log("Lucky Number:", sum);
console.log("You are a", names[sum]);