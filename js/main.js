// CONSTANTS 

import { firstDoor, goldenKey, smallTable, objectCombinations, } from "./objectStringsRoomOne.js";

const userInput = document.getElementById("userInput");

const objectExamine = ["look", "Look", "examine", "Examine", "inspect","Inspect", ];

const objectInteract = ["open", "interact", "use", "try", ]

const objectTake = ["take", ]

const objectUseWith = ["use", "combine", ]


// PLAYER INVENTORY

let playerInventory = [

]

// MAPS

const roomOne = new Map([
    
    ["table", smallTable],
    ["key", goldenKey],
    ["door", firstDoor],

])

let currentRoom = roomOne


let parseUserInput = () =>{
    const userCommand = document.getElementById("userInput").value;
    let numberOfWords = userCommand.split(" ").length
    console.log(numberOfWords)
    let userCommandVerb = userCommand.split(" ").shift();
    let userCommandObject = userCommand.split(" ")[1];
    let userCommandObjectTwo = userCommand.split(" ").pop();

    return {verb: userCommandVerb, object: userCommandObject, objectTwo: userCommandObjectTwo, number: numberOfWords}}


// DETERMINES ACTION

let interpretUserInput = (userInput) => {

   

    if (userInput.number > 2) {
        const objectCombination = objectCombinations.get(JSON.stringify([currentRoom.get(userInput.object), currentRoom.get(userInput.objectTwo)]))
        // console.log(objectCombinations)

        // USE OBJECT ON OBJECT
        if (objectUseWith.includes(userInput.verb) && objectCombination != null && playerInventory.includes(userInput.object)) {

            document.getElementById("textOutput").innerHTML = 
            objectCombination;
        }
        else if (objectUseWith.includes(userInput.verb) && objectCombination != null) {

            document.getElementById("textOutput").innerHTML = `You don't have a ${userInput.object}.`

        }

        else {

            document.getElementById("textOutput").innerHTML = "I don't know what you are trying to do.";
        }
    }
        
    else { 
        // EXAMINE TABLE
        if (objectExamine.includes(userInput.verb) && currentRoom.has(userInput.object)) {

            document.getElementById("textOutput").innerHTML = 
            currentRoom.get(userInput.object).examineObject;
        }

        // INTERACT
        else if (objectInteract.includes(userInput.verb) && currentRoom.has(userInput.object)) {
            if (currentRoom.get(userInput.object).hasOwnProperty("interactObject")) {
                document.getElementById("textOutput").innerHTML = 
                currentRoom.get(userInput.object).interactObject;
            }

            else {
                document.getElementById("textOutput").innerHTML = `You can't use the ${userInput.object}.`
            }
        }

        // TAKE
        else if (objectTake.includes(userInput.verb)) { 

            if (currentRoom.has(userInput.object)) {

                if (currentRoom.get(userInput.object).hasOwnProperty("takeObject")) {
                    document.getElementById("textOutput").innerHTML = 
                    currentRoom.get(userInput.object).takeObject;
                    playerInventory += userInput.object
                    console.log(JSON.stringify(playerInventory));
                }
                //  CAN'T TAKE
                else {
                    document.getElementById("textOutput").innerHTML = `You can't take the ${userInput.object}.`;
                }
            }
            // OBJECT DOESNT EXIST
            else {
                document.getElementById("textOutput").innerHTML = `There is no ${userInput.object}.`;
            } 
        } 
        // WRONG INPUT
        else {
            document.getElementById("textOutput").innerHTML = "I don't know what you are trying to do.";
        } 
    }
    
}


// RUN FUNCTIONS ON ENTER

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let userInputs = parseUserInput()
        interpretUserInput(userInputs)
        userInput.value = ""
    }
})


        


    