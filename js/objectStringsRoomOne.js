
// export const examineObject = {

//     // initial presence strings
//     initInitRoom: "You wake up in an unfamiliar room. There is a table in the middle, and a wooden door on the far side.",

//     "table": "The table is made out of wood. There is a small key on it.",
//     "key": "A small, golden key.",

//     "door": "A wooden door. You don\'t know where it leads.",
// }

// export const interactObject = {
//     "door": "You try the door. It seems to be locked.",
    
// }

// export const takeObject = {
//     "key": "You take the key.",
// }

// export const useWithObject = {
//     "key": "You unlock the door.",
//     "door": "You unlock the door.",
// }




// export const goldenKey = {
//     "examine": "A small, golden key.",
//     "take": "You take the key."
//     // "use with": "You unlock the door."
// }



export const smallTable = {
    examineObject: "The table is made out of wood. There is a small key on it.",
}

export const goldenKey = {
    reference: "key",
    objectName: "small, golden key",
    examineObject: "A small, golden key.",
    takeObject: "You take the golden key.",
    interactObject: "What do you want to use the golden key with?"
}

export const redVase = {
    reference: "vase",
    objectName: "small, red vase",
    examineObject: "A small, red vase.",
    takeObject: "You take the red vase.",
    interactObject: "What do you want to use the red vase with?"
}
export const firstDoor = {
    reference: "door",
    objectName: "wooden door",
    examineObject: "A wooden door. You don\'t know where it leads.",
    interactObject: "You try the door. It seems to be locked.",
}

export const objectCombinations = new Map ([
    [JSON.stringify([goldenKey, firstDoor]), "You unlock the door."],
])