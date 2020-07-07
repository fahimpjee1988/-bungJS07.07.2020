// function myFunction() {
//     document.getElementById("demo").innerHTML = "I am Javascript";
//     console.log(myFunction)
//   }

//   let text ="I am Javascript";
//   console.log(text)

//   var c = document.getElementById("num2")
//   var d = document.getElementById("num3")

//   function calculate() {
//       e = c.value + d.value
//       document.getElementById("ergebniss").value = e
//       console.log(c)
//   }

// function multiply() {
//     console.log("mein Funktion funktioniert")
//     console.log(document.getElementById("num1").value)
//     console.log(document.getElementById("num2").value)
//     document.getElementById("result").innerHTML = document.getElementById("num1").value * document.getElementById("num2").value
// }


// let number4= 4;
// console.log (typeof (number4))

// //1.2 String

// let text1 ="some text";
// let text2 ="more text"
// console.log(typeof ("text1"))


// let isDone = true;
// let isNotDone = false;

// console.log (typeof (isDone))
// console.log (isDone)
// console.log (typeof (isNotDone))
// console.log (isnotDone)

// CSS and HTML changes within JavascripT

// console.log(document.getElementById("headline")) // HTML tag
// console.log(document.getElementById("headline").innerHTML) // Inhalt HTML tag
// document.getElementById("section").style.textAlign = "center"
// console.log(document.getElementById("headline"))
// document.getElementById("headline").style.fontSize = "3em"
// document.getElementById("headline").style.color= "red"
// document.getElementById("headline").style.textDecoration= "underline"

// document.getElementById("paragraph").style.fontSize=" 2em"


// document.getElementById("paragraph").style.border=" solid black"
// console.log(document.getElementById("paragraph"))
// Document.getElementById("paragraph").style.padding= "4em"


// document.getElementById("paragraph").style.color="blue"
// console.log(document.getElementById("paragraph"))

// document.getElementById("paragraph").style.visited.color="blue"

// document.getElementById("section").style.textAlign="center"

// Document.getElementById("paragraph").style.hover.color= "red"


//.bg gold , 

//classList.add('')
function goGold() {
    console.log("text") //test 
    document.getElementById("mySection").classList.add("bg") // adding class
    console.log(document.getElementById("paragraph1").classList) // list of classes
}
//classList.remove('')
function removeGold() {
    document.getElementById("mySection").classList.remove('bg')
    console.log(document.getElementById("paragraph1").classList)
}

//classList.toggle
function switchGold() {
    console.log("toggle button is working");
    document.getElementById('mySection').classList.toggle("bg")

}


var i = 1;     
console.log(typeof(i))    
var lastName = "Johnson";

console.log(typeof(lastName))

// achte die untenstehenden Sonderzeichen:


var lastName = "Johnson"; 
var x = {
  firstName: "John",
  lastName: "Doe"
}; 
console.log(typeof(x)) 





var j = "2";
console.log(typeof(j)) 

var status=true;

console.log(typeof(status)) 

var hello=hello;

console.log(typeof(hello)) 

var helloWorld = "hello";

console.log(typeof(helloWorld)) 

