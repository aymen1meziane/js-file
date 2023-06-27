//document.getElementById("count").innerText = 8




//create a variable myAge and set its value to your age
let myAge = 20

//log the myAge variable to the console
console.log(myAge)

//create two variables myAge and humanDogRAtio
//multiply the two together and store the result in myDogAge
//Lg myDogAge to the console

let humanDogRatio = 7
  
let myDogAge = myAge * humanDogRatio

console.log(myDogAge)

//create a variable bonusPoints, Initialize it as 50. Increase it to 100.
//decrease it down to 25, and then finally increase it to 75
//Console.log the value after each step

let bonusPoints =50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)


bonusPoints = bonusPoints + 45
console.log(bonusPoints)

// Create a function that increments the lapsCompleted variable with one
// Run it three times
let lapsCompleted = 0
function inclaps() {
    lapsCompleted = lapsCompleted +1
}
inclaps()
inclaps()
inclaps()
console.log(lapsCompleted)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0
function increment() {
    console.log("clicked")
    count=count+1
    document.getElementById("count").textContent= count ;
}
 let saveEL = document.getElementById("save-el")
function save() {
    let countStr = count + " - ";
    saveEL.textContent += countStr;
    document.getElementById("count").textContent = 0;
    count = 0;
}
