export const firstDoor = {
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

export const thirdDoor = {
    reference: "steel door",
    objectName: "steel door",
    examineObject: "An steel door.  You don\'t know where it leads.",
    interactObject:  "You try the door. It seems to be locked.",
}


export const objectCombinations = new Map ([
        // [JSON.stringify([goldenKey, firstDoor]), "You unlock the door."],
    ])



export let roomTwo = new Map ([
    
//     ["table", smallTable],
//     ["chest", smallChest],
    ["steel door", thirdDoor],
    ["door", firstDoor],
    ["letter", sealedLetter]
//     ["sword", wornSword],


])


