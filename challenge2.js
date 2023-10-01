console.log("(challenge 2)");

let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capitals = ["Beijing", "Tokyo", "Seoul", "Hanoi", "Kuala Lumpur"];

if (countries.length == capitals.length) {
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let capital = capitals[i];
    console.log(
      `-Your country: {${country}} has the capital named: {${capital}}.`
    );
  }
} else {
  console.log(
    "ERROR!: The number of countries does not match the number of capitals. Please try again."
  );
}
