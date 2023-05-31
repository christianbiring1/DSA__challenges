function checkSpeed(speed) {
  const speedLimit = 60;
  const kmPerHour = 5;

  if (speed < speedLimit + kmPerHour) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimit) / 5);
    if (points >= 12) console.log("License Suspended!");
    else console.log("Points", points);
  }
}

checkSpeed(115);
