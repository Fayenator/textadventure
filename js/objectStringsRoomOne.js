
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
    examineObject: "A small, golden key.",
    takeObject: "You take the key.",
    interactObject: "What do you want to use the key with?"
}

export const firstDoor = {
    examineObject: "A wooden door. You don\'t know where it leads.",
    interactObject: "You try the door. It seems to be locked.",
}

export const objectCombinations = new Map ([
    [JSON.stringify([goldenKey, firstDoor]), "You unlock the door."],
])