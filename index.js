const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(team) {
  const yearOfTheWin = team.find((entry) => entry.result === "W");
  return yearOfTheWin ? yearOfTheWin.year : undefined;
}

console.log(superbowlWin(record)); // Call the function and log the result

const winningRecord = record.find((entry) => entry.result === "W");
console.log(winningRecord);
