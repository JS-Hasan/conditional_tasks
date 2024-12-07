const age = 61;
let ticketPrice = 800;

age < 10
  ? console.log("Free")
  : age <= 10 || age <= 18
  ? console.log("Gets 50% discount, Pay : ", (ticketPrice * 50) / 100)
  : age >= 60
  ? console.log(
      "Gets 15% discount, Pay : ",
      ticketPrice - (ticketPrice * 15) / 100
    )
  : console.log("Regular");
