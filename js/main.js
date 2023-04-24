// CONSTANTS 

import { firstDoor, goldenKey, redVase, smallTable, objectCombinations, } from "./objectStringsRoomOne.js";

const uInput = document.getElementById("userInput");

const objectExamine = ["look", "Look", "examine", "Examine", "inspect","Inspect", "check", ];

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
    ["vase", redVase],
    ["door", firstDoor],

])

let currentRoom = roomOne


let parseUserInput = () =>{
    const userCommand = document.getElementById("userInput").value;
    const numberOfWords = userCommand.split(" ").length
    console.log(numberOfWords)
    const userCommandVerb = userCommand.split(" ").shift();
    const userCommandObject = userCommand.split(" ")[1];
    const userCommandObjectTwo = userCommand.split(" ").pop();

    return {verb: userCommandVerb, object: userCommandObject, objectTwo: userCommandObjectTwo, number: numberOfWords}}


const postOutput = (textOutput) => {
    
    const oldOutput = document.getElementById("textOutput").innerHTML
    const listOfLines = oldOutput.split("<br>")

    document.getElementById("textOutput").innerHTML = `${listOfLines.slice(-5).join("<br>")} <br> ${textOutput}`;
    
}

const inventoryOutput = (userInput) => {
    if (userInput.verb == "inventory" || (userInput.object == "inventory" && objectExamine.includes(userInput.verb)) || (userInput.object == "inventory" && objectInteract.includes(userInput.verb))) {
        postOutput(`Inventory: <br>${playerInventory.join(", ")}`)

        return true 
    }

    return false
}

// DETERMINES ACTION

let interpretUserInput = (userInput) => {

    if (inventoryOutput(userInput)) {
        return 
    }

    if (userInput.number > 2) {
        const objectCombination = objectCombinations.get(JSON.stringify([currentRoom.get(userInput.object), currentRoom.get(userInput.objectTwo)]))
        // console.log(objectCombinations)

        // USE OBJECT ON OBJECT
        if (objectUseWith.includes(userInput.verb) && objectCombination != null && playerInventory.includes(userInput.object)) {

            postOutput(objectCombination);
        }
        else if (objectUseWith.includes(userInput.verb) && objectCombination != null) {

            postOutput(`You don't have a ${userInput.object}.`)

        }

        else {

            postOutput(`I don't know what you are trying to do.`);
        }
    }
        
    else { 
        // EXAMINE TABLE
        if (objectExamine.includes(userInput.verb) && currentRoom.has(userInput.object)) {

            postOutput(currentRoom.get(userInput.object).examineObject);

        }

        // INTERACT
        else if (objectInteract.includes(userInput.verb) && currentRoom.has(userInput.object)) {
            if (currentRoom.get(userInput.object).hasOwnProperty("interactObject")) {
                postOutput(currentRoom.get(userInput.object).interactObject);
                
            }

            else {
                postOutput(`You can't use the ${userInput.object}.`)
            }
        }

        // TAKE
        else if (objectTake.includes(userInput.verb)) { 

            if (currentRoom.has(userInput.object)) {

                if (currentRoom.get(userInput.object).hasOwnProperty("takeObject")) {
                    postOutput(currentRoom.get(userInput.object).takeObject);

                    playerInventory += userInput.object;
                    console.log(JSON.stringify(playerInventory));
                }
                //  CAN'T TAKE
                else {
                    postOutput(`You can't take the ${userInput.object}.`);
                }
            }
            // OBJECT DOESNT EXIST
            else {
                postOutput(`There is no ${userInput.object}.`);
            } 
        } 
        // WRONG INPUT
        else {
            postOutput("I don't know what you are trying to do.");
        } 
    }
    
}

// RUN FUNCTIONS ON ENTER

uInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let userInputs = parseUserInput()
        interpretUserInput(userInputs)
        uInput.value = ""
    }
})


        


    