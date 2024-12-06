const weight = 72; //In Kg
const height = 5.8; // In Inches
const heightInMeter = height * 0.3048; // In meters 

const calculateBMI = weight / (heightInMeter * heightInMeter);
console.log(calculateBMI);

if(calculateBMI <  18.5){
    console.log("You are underweight"); 
} else if (calculateBMI >= 18.5 && calculateBMI <= 24.9){
        console.log("You are normal"); 
} else if(calculateBMI >=25 && calculateBMI <= 29.9){
        console.log("You are overweight"); 
} else{
    console.log("You are obese"); 
}