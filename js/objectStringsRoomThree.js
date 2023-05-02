export const fourthDoor = {
    reference: "door",
    objectName: "wooden door",
    examineObject: "A wooden door. You don\'t know where it leads.",
    interactObject: "You try the door. It seems to be locked.",
}

export const sealedLetter = {
    reference: "letter",
    objectName: "sealed letter",
    examineObject: "A letter. It is sealed.",
    interactObject: "You open the sealed letter.",
    takeObject: "You take the sealed letter."
}

export const secondDoor = {
    reference: "iron door",
    objectName: "iron door",
    examineObject: "An iron door. You don\'t know where it leads.",
    interactObject: "You try the door. It seems to be locked.",
    goDirection: "You walk through the iron door."

}


export const objectCombinations = new Map ([
        // [JSON.stringify([goldenKey, firstDoor]), "You unlock the door."],
    ])



export let roomThree = new Map ([
    
//     ["table", smallTable],
//     ["chest", smallChest],
    ["iron door", secondDoor],
    ["door", fourthDoor],
    ["letter", sealedLetter]
//     ["sword", wornSword],


])


