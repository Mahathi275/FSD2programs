// Input sentence
const sentence = "my name is raja";

// Function to reverse each word
function reverseEachWord(str) {
  // 1. Split the sentence into an array of words by space
  // 2. Map through each word, split into characters, reverse, and join back
  // 3. Join the reversed words back into a single sentence
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

// Call the function and print the result
const result = reverseEachWord(sentence);
console.log(result);
