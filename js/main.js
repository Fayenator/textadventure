// CONSTANTS 

import * as roomOne from "./objectStringsRoomOne.js";

const uInput = document.getElementById("userInput");

const objectExamine = ["look", "examine", "inspect", "check", ];

const objectInteract = ["open", "interact", "use", "try", ]

const objectTake = ["take", ]

const objectUseWith = ["use", "combine", ]

// PLAYER INVENTORY

let playerInventory = [
    
]

let currentRoom = roomOne.roomOne


let parseUserInput = () =>{
    const userCommandLower = document.getElementById("userInput").value.toLowerCase();
    const numberOfWords = userCommandLower.split(" ").length
    // console.log(numberOfWords)
    const userCommandVerb = userCommandLower.split(" ").shift();
    const userCommandObject = userCommandLower.split(" ")[1];
    const userCommandObjectTwo = userCommandLower.split(" ").pop();

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


const checkContainer = (item) => {
    for (const object of currentRoom.values()) {
        console.log(object)
        if (object.hasOwnProperty("containsObject") && object.containsObject.some(x => x.reference === item)) {
            return true
        }
    }

    return false
}

const getFromContainer = (item) => {
    for (const object of currentRoom.values()) {
        if (object.hasOwnProperty("containsObject")) {
            for (const containedItem of object.containsObject) {
                if (containedItem.reference === item) {
                    return {
                        item: containedItem, 
                        container: object,
                    }
                }   
            }
        }
    }

    return null
}
// EXAMINE CONTAINER

const examineContainer = (container) => {
    if (container.containsObject.length === 0) {
        postOutput(container.examineObjectEmpty)
    }

    else {
        const objectList = container.containsObject.map(x => x.objectName).join(" and a ")
        postOutput(`${container.examineObject} a ${objectList}.`)
    }
}


// DETERMINES ACTION

let interpretUserInput = (userInput) => {

    if (inventoryOutput(userInput)) {
        return 
    }

    if (userInput.number > 2) {
        const objectCombination = roomOne.objectCombinations.get(JSON.stringify([currentRoom.get(userInput.object), currentRoom.get(userInput.objectTwo)]))
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

        if (objectExamine.includes(userInput.verb) && (currentRoom.has(userInput.object) || checkContainer(userInput.object))) {
            let examinedObject = currentRoom.get(userInput.object) || getFromContainer(userInput.object).item

            if (examinedObject.hasOwnProperty("containsObject")) {
                examineContainer(examinedObject)
            }
            else {
                postOutput(examinedObject.examineObject);
            }
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

            if (currentRoom.has(userInput.object) || (checkContainer(userInput.object))) {

                if (currentRoom.has(userInput.object) && currentRoom.get(userInput.object).hasOwnProperty("takeObject")) {
                    postOutput(currentRoom.get(userInput.object).takeObject);

                    playerInventory.push(userInput.object);
                    currentRoom.delete(userInput.object)
                }

                else if (checkContainer(userInput.object) && getFromContainer(userInput.object).item.hasOwnProperty("takeObject")) {
                    let container = getFromContainer(userInput.object).container
                    let item = getFromContainer(userInput.object).item
                    postOutput(item.takeObject);

                    playerInventory.push(userInput.object);
                    container.containsObject = container.containsObject.filter(item => item.reference != userInput.object)
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


        


    