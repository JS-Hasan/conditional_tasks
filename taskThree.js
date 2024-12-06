let grades = 1;

// Condition ? <If true> : <If false>

grades >= 90 && grades <= 100
  ? console.log("A")
  : grades >= 80 && grades <= 89
  ? console.log("B")
  : grades >= 70 && grades <= 79
  ? console.log("C")
  : grades >= 60 && grades <= 69
  ? console.log("D")
  : console.log("F");
