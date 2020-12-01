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
// Мой вариант ниже

function returnStringNum (obj) {
    let length = [];
    for (const key in obj) {
        if (typeof(obj[key]) == "string")
        length.push(obj[key].length);           
    }
    return length;
};

console.log(returnStringNum(obj));

// Мой вариант который первый, и вот из этого варианта я не знал как 
// сделать в функции чтобы она показывала результат. Еще я думал каждый ключ отдельно.
// можешь подсказать как? Потому что рили сложно мне это все дается =((

    for (const key in obj) {
        let element = obj[key];
        let length = element.length;
        console.log(length);
}


// вторая задача, как я сделал, понятное дело бред, но вот вариант.
// я так понял это просто перезаписывает первый obj, и в дальнейшем не смогу его использовать?
const obj2 = {
    age:null, 
    height: null, 
    name: '',
    surname: '',

}

function createObject (){

    let result;
    result = Object.assign(obj, obj2);
    return result;

}

let result = createObject()
console.log(result);

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
        case 'boolean': //не совсем понял зачем здесь булевое значение?
            return Number(element); //если true, оно просто вернет число записаное в ключе?
        case 'function': // зачем function? Извини не понимаю.
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

// Денис, сори за вопросы в коментах, но сможешь мне на них ответить пожалуйста?