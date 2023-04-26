export const goldenKey = {
    reference: "key",
    objectName: "small, golden key",
    examineObject: "A small, golden key.",
    takeObject: "You take the golden key.",
    interactObject: "What do you want to use the golden key with?",
}

export let smallTable = {
    containsObject: [goldenKey, ],
    reference: "table",
    objectName: "small, wooden table",
    examineObject: "The table is made out of wood. On it is ",
    examineObjectEmpty: "The table is made out of wood.",
   
}

export let wornSword = {
    reference: "sword",
    objectName: "worn iron sword",
    examineObject: "a worn iron sword",
    takeObject: "you take the worn sword",
    interactObject: "What do you want to use the worn sword with?",
}

export const redVase = {
    reference: "vase",
    objectName: "small, red vase",
    examineObject: "A small, red vase.",
    takeObject: "You take the red vase.",
    interactObject: "What do you want to use the red vase with?",
}

export const brownBook = {
    reference: "book",
    objectName: "small, brown book",
    examineObject: "A small, brown book.",
    takeObject: "You take the brown book.",
    interactObject: "You read the book.",
}

export let smallChest = {
    containsObject: [redVase, brownBook],
    reference: "chest",
    objectName: "small, wooden chest",
    examineObject: `The chest is made out of wood. It contains `,
    examineObjectEmpty: "The chest is made out of wood. It is empty.",
    
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