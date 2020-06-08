const rollButton = document.querySelector("#roll-button")
const numberRolled = document.querySelector("#number-of-dice")
const allElement = document.querySelector("#showAll")
const totalValue = document.querySelector("#total-count")
const allRollslist = document.querySelector("#all-Rolls")


const dieRolls = []


//  const newDiceString = '<li class="dice">' + numberRolled + "</li>";
//  allRollsElement.innerHTML += newDiceString;






rollButton.addEventListener("click", function () {
 let newValue = numberRolled.value
     for (let index = 0; index < newValue; index++) {
     dieRolls.push(Math.ceil(Math.random() * 6))
}
 
 let total = 0
 for (let counter = 0; counter < dieRolls.length; counter++){
    total += dieRolls[counter]
  }
 totalValue.innerHTML = total
  
 


console.log("Die rolls", dieRolls  )
});


allElement.addEventListener("click", function () {
 let counter = 0
 while (counter < dieRolls.length) {
     allRollslist.innerHTML += '<li>' + dieRolls[counter] + '</li>';
     counter += 1
 }

    
     
     
 
 
 

     
});


