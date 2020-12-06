'use strict'

const obj = {
    age: 20,
    height: 180,
    name: 'Vasya',
    surname: 'pupkin',

};

function returnStringNumber (obj){
    let length = 0;
    for (const key in obj) {
        const element = obj[key];
        if (typeof element !== "string") continue;
            length +=element.length;
    }
    return length;
};

console.log(returnStringNumber(obj));


//Вторая задача

function copyOfObject (obj) {
    let newObject = {};
    for (const key in obj) {
           newObject[key] = null;
        }
    return newObject;
};

const newObjectResult = copyOfObject (obj);

console.log(newObjectResult);

// Третья задача

let obj3 = {
    name: 'Vasya',
    surname: 'Pupkin',
    age: 5,
    height: 180,
}

function valueLength (element) {
    switch (typeof element) {
        case 'string':
            return element.length;
        case 'boolean': 
            return Number(element); 
        case 'function':
            return 0;
        default:
            return element;
    }
};

function copyOfObjectElements (obj3) {
    const newObject = {};
    for (const key in obj3) {
        newObject[key] = valueLength(obj3[key]);      
        
    }
    return newObject;
}

let copyOfObjectValues = copyOfObjectElements(obj3);

console.log(copyOfObjectValues);
