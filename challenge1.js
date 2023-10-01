console.log("(challenge 1)");
console.log("*There is no war in Ba Sing Se*");

let message = "There is no war in Ba Sing Se";

let words = 0;
let messageArray = Array.from(message);

for (let i = 0; i < messageArray.length; i++) {
  if (messageArray[i] == " ") {
    words++;
  }
}

console.log("-this message contains: " + words + " words");
