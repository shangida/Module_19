
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
document.write("Total avgerss is " + result.toFixed(2) + br);
//ends

//object create
var person ={
    name: "Shangida Khatun",
    height: "5 fut",
    weight: "40kg",
    eyeColor: "bule"
}

var eye_color = person["eyeColor"];

//display the output in object
document.write("Name is " + person.name + br);
document.write("eye color is " + eye_color + br);
document.write("Weight is " + person.weight + br);
console.log(person);
//ends

// students details  using object
var students1 ={
    id: 111,
    name: "Shangida",
    sesion: "2017 - 18",

}

var students2 ={
    id: 112,
    name: "Arifa",
    sesion: "2017 - 18",
    
}

var students3 ={
    id: 113,
    name: "Nabila",
    sesion: "2017 - 18",
    
}

document.write("Student1 name is " + students1.name + br);
document.write("Student2 name is " + students2.name + br);
document.write("Student3 name is " + students3.name + br);

document.write("Student1 id is " + students1.id + br);
document.write("Student2 id is " + students2.id + br);
document.write("Student3 is is " + students3.id + br);

document.write("students sesion is " + students1.sesion + br);
//ends

//shoping cart program using object
var shopingCart ={
    books: 5,
    pens: 2,
    note_book: 6,
    galss: 2,
    mouse: 4
}

var booksCount = shopingCart["books"];
var noteBookCount = shopingCart["note_book"];
var galssCount = shopingCart.galss;

document.write("Total books is " + booksCount + br);
document.write("Total note books is " + noteBookCount + br);
document.write("Total glass is " + galssCount + br);

//return properties name or keys name in object 
var porpertices = Object.keys(shopingCart);
document.write(porpertices + br);

//reten properties values or kyes values in object
document.write(Object.values(shopingCart) + br);

//when properties name put the variables, get the properties values
var propertiesName = "pens";
var propertiesValues = shopingCart[propertiesName];
document.write(propertiesName, propertiesValues + br);

var propertiesName ="books"
var propertiesValues =shopingCart[propertiesName]
//var propertiesValues =shopingCart.propertiesName // error
document.write(propertiesValues + br);

//set the property values
console.log(shopingCart);

shopingCart.galss = 3;
console.log(shopingCart);

console.log(shopingCart.books);

shopingCart["books"] = 10;
console.log(shopingCart["books"]);

//object looping js
var computer = {
    monitor: "DELL",
    procesor: "giga byte",
    mouse: "fastkey",
    keybroad: "dell"
}

var porperty = Object.keys(computer);
console.log(porperty);
//ends

//Task 01 strats
function foo()
{
    document.write("print the " + "foo");
}
foo();

function bar()
{
    document.write("print the " + "bar");

}
bar();
//ends

function make_avg()
{
    var num1 = 20;
    var num2 = 35;
    var num3 = 15;

    var sum = num1 + num2 + num3;
    var total_avg = sum / 3;
    return total_avg;

}
var result = make_avg();
document.write("Total avg is " + result.toFixed(2));



 