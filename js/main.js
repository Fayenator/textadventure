import {examineObject, interactObject, takeObject, useWithObject, } from "./objectStringsRoomOne.js"

// KEEP FOCUS ON INPUT 

document.getElementById("userInput").onblur = function() {
    userInput.focus();
};


// INITIATE FIRST DESCRIPTOR PARAGRAPH

document.getElementById("descriptorParagraph").innerHTML = 
examineObject.initInitRoom;


//  CONSTANTS 

const userInput = document.getElementById("userInput");

const objectExamine = ["look", "Look", "examine", "Examine", "inspect","Inspect",];

const objectInteract = ["open", "interact", "use", "try", ]

const objectTake = ["take", ]

const objectUseWith = ["use", "combine"]


//  PLAYER INVENTORY

var playerInventory = {
    
}

// LOG USER INPUT AFTER ENTER KEY IS PRESSED

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
       
        const userCommand = document.getElementById("userInput").value;
        let numberOfWords = userCommand.split(" ").length
        console.log(numberOfWords)
        let userCommandVerb = userCommand.split(" ").shift();
        let userCommandObjectTwo = userCommand.split(" ")[1];
        let userCommandObject = userCommand.split(" ").pop();

        if (numberOfWords > 2) {

            // USE OBJECT ON OBJECT
            if (objectUseWith.includes(userCommandVerb) && useWithObject.hasOwnProperty(userCommandObject) && useWithObject.hasOwnProperty(userCommandObjectTwo) && playerInventory.includes(userCommandObjectTwo)) {

                document.getElementById("textOutput").innerHTML = 
                useWithObject[userCommandObject];
            }
            
            else {
                document.getElementById("textOutput").innerHTML = "I don't know what you are trying to do.";
            }
        }
        
        else { 
        // EXAMINE
            if (objectExamine.includes(userCommandVerb) && examineObject.hasOwnProperty(userCommandObject)) {

                document.getElementById("textOutput").innerHTML = 
                examineObject[userCommandObject];
            }

            // INTERACT
            else if (objectInteract.includes(userCommandVerb) && interactObject.hasOwnProperty(userCommandObject)) {

                document.getElementById("textOutput").innerHTML = 
                interactObject[userCommandObject];
            }

            // TAKE
            else if (objectTake.includes(userCommandVerb) && takeObject.hasOwnProperty(userCommandObject)) {

                document.getElementById("textOutput").innerHTML = 
                takeObject[userCommandObject];

                playerInventory += userCommandObject

                // console.log(JSON.stringify(playerInventory));

            }

            // CAN'T TAKE

            else if (objectTake.includes(userCommandVerb)) {
                if (!(takeObject.hasOwnProperty(userCommandObject))) {
                    if (examineObject.hasOwnProperty(userCommandObject)) {
                        document.getElementById("textOutput").innerHTML = "You can't take the " + userCommandObject + ".";
                    }
                    else {
                        document.getElementById("textOutput").innerHTML = "There is no " + userCommandObject + ".";
                    }
                    
                }
            }

            // WRONG INPUT
            else {
                document.getElementById("textOutput").innerHTML = "I don't know what you are trying to do.";
            } }
        

        
        userInput.value = ""

        }

        
        
        
     
});



