let myGrades = 89;
let friendGrades = 10;

friendGrades >= 80
  ? console.log("go for a lunch")
  : friendGrades < 80 && friendGrades >= 60
  ? console.log("good luck next time")
  : friendGrades < 60 && friendGrades >= 40
  ? console.log("friend's message unseen")
  : console.log("block your friend");
