var farenhite;
var celcius;
var c:number=38;
var f:number=100;

farenhite = (c*1.8+32);
console.log(farenhite);
celcius=((f-32)*0.56);
console.log(celcius);

//Write a program that calculates the percentage.
var StudentName:string="Muhammad Adil";
var GivenMarks:number=1000;
var TotalMarks:number=1100;
var calculation:number;
calculation=(GivenMarks/TotalMarks)*100;
console.log(calculation);

//Write a program that converts given number 
of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var GivenDays:number=28;
var calculation:number;
calculation=(GivenDays/7);
console.log(calculation);

// Write a program that calculates the discount for a product based 
// on its price. If the price is above $100, apply a 10% discount; 
// otherwise, apply a 5% discount.
var OldPrice:number=150;
var discount:number;
var NewPrice:number;
if(OldPrice>100){
    discount=(OldPrice*10/100);
    console.log(discount);
    NewPrice=OldPrice-discount;
    console.log(NewPrice);
}
else{
    discount=(OldPrice*5/100);
    console.log(discount);
    NewPrice=OldPrice-discount;
    console.log(NewPrice);
}

// Create a program that determines the category of a user-provided age. 
// If the age is between 0 and 12, print "Child." 
// If it's between 13 and 19, print "Teenager." 
// Otherwise, print "Adult."
var age:number=7;
if(age>=0 && age<=12){
    console.log("Child");
}
else if(age >=13 && age<=19){
    console.log("Teenager");
}
else{
    console.log("Adult");
}

// Write a program that takes temperature and check it. 
// If it is cold then suggest the user to wear warm clothes 
// and so on according to the weather.
var temp:string='warm';
//var temp:string='cold';
if (temp=='warm'){
    console.log("Temp is warm");
}
else{
    console.log("Temp is cold");
}


// Write a program that checks if the given number is  divisible 
// by 3 or 5 or both or not divisible by anyone show output accordingly.
var GivenNumber:number=55;
if(GivenNumber%3 == 0){
    console.log("The number is divisible by 3");
}
else if(GivenNumber%5 == 0){
    console.log("The number is divisible by 5");
}
else{
    console.log("'None', Divisbible not by 3 or 5 ");
}

// Write a program that checks if the given year is leap year or not.
var GivenYear:number = 2024;
if(GivenYear%4 == 0){
    console.log("This is Leap year");
}
else {
    console.log("This is not a Leap year");
}

// Develop a program that determines the day of the week. 
// Ask the user for a number (1-7) and use nested 
// if statements to print the corresponding day's name.
var DayOfWeek:number=4;
if(DayOfWeek==1){
    console.log("Monday");
}
else if(DayOfWeek==2){
    console.log("Tuesday");
}
else if(DayOfWeek==3){
    console.log("Wednesday");
}
else if(DayOfWeek==4){
    console.log("Thursday");
}
else if(DayOfWeek==5){
    console.log("Friday");
}
else if(DayOfWeek==6){
    console.log("Satday");
}
else{
    console.log("Sunday");
}

// Write a program that takes the number of units consumed by a user 
// if it is greater than 100 then add 10% tax 
// if greater than 200 then add 15% of tax so on up to 
// if greater than 500 then add 25% of tax
var ConsumedUnits:number=387;
var PriceOfUnit:number=20;
var NetBill:number=ConsumedUnits*PriceOfUnit;
var CalculationOfBill:number;

if(ConsumedUnits>101 && ConsumedUnits<=200){
    CalculationOfBill=(((NetBill*10)/100) + NetBill);
    console.log(NetBill);
    console.log(CalculationOfBill);
}
else if(ConsumedUnits>201 && ConsumedUnits<=500){
   
    CalculationOfBill=(((NetBill*15)/100) + NetBill);
    console.log(NetBill);
    console.log(CalculationOfBill);
}
else if(ConsumedUnits>501){
    CalculationOfBill=(((NetBill*25)/100) + NetBill);
    console.log(NetBill);
    console.log(CalculationOfBill);
}
else{
    console.log("Undefined value, Please correct")
}