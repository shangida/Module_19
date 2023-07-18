
var br = "</br>";

//function creat
function sum()
{
    var num1 = 30;
    var num2 = 30;
    var result = num1 + num2;
    document.write("Total sum is " + result + br);
}
sum();  //call function
//ends

// function with paramaters
function mul(num1, num2)
{
    var result = num1 * num2;
    document.write("Result is " + result + br);

}
mul(5, 6);
document.write("agian function call" + br);
mul(3, 20);
//ends

//program a function with return
function avg(bangla, english, math)
{
    var total_marks = bangla + english + math;
    var total_avg = total_marks / 3;
    return total_avg;
}

var banglaMark = 60;
var englishMark = 80;
var mathMark = 50;

var result = avg(banglaMark, englishMark, mathMark);
document.write("Total avgerss is " + result.toFixed(2));