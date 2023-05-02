export const fourthDoor = {
    reference: "door",
    objectName: "wooden door",
    examineObject: "A wooden door. You don\'t know where it leads.",
    interactObject: "You try the door. It seems to be locked.",
}

export const thirdDoor = {
    reference: "steel door",
    objectName: "steel door",
    examineObject: "An steel door.  You don\'t know where it leads.",
    interactObject:  "You try the door. It seems to be locked.",
}



export let roomFour = new Map([

    ["door", fourthDoor],
    ["steel door", thirdDoor]

])