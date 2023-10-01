console.log("(challenge 4)");

function seasons() {
  const Dates = new Date();
  const Months = Dates.getMonth() + 1;

  if (Months >= 3 && Months <= 5) {
    return "Spring";
  } else if (Months >= 6 && Months <= 8) {
    return "Summer";
  } else if (Months >= 9 && Months <= 11) {
    return "Autumn";
  } else {
    return "Winter";
  }
}

const Seasons = seasons();
console.log("-Current season: *" + Seasons + "*");
