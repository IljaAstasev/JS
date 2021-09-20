"use strict"

// get set
const person = {
    name: "John",
    age: 28,

    get userAge(){
        return this.age;
    },
    set userAge(num){
        this.age = num;
    }
};



console.log(person.userAge);
console.log(person.userAge = 30);
console.log(person.userAge);

// инкапсуляция

function User (name, age){
    this.name = name;
    this.age = age;

    this.say = function() {
        console.log(`имя пользователя: ${this.name},возраст ${this.age}`);
    };
}

const john = new User('Jonh', 22);
john.age = 30;
console.log(john.name);
console.log(john.age);
john.say();

// с инкапсуляцией

function User2 (name, age){
    this.name = name;
    let userAge = age;
    
    this.say = function(){
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };
}

const ann = new User2('Ann', 22);

console.log(ann.name);
console.log(ann.userAge);
ann.say();

let userAge = age;

this.say = function(){
    console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
};

this.getAge = function() {
    return userAge;
}
this.setAge = function(age){
    if(typeof age === 'number' && age > 0 && age <100){
        userAge = age;
    }else{
        console.log('недопустимое значение!')
    }
}


const kirill = new User3('Kirill', 25);

console.log(kirill.name);
console.log(kirill.userAge);
console.log(kirill.getAge());
kirill.setAge(33);
kirill.setAge(323);
kirill.setAge('asfass');
kirill.say();

class Author {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #surname = 'maal' // приватное поле

    say = () => {
        console.log(`имя пользователя: ${this.name}, ${this.#surname} возраст ${this._age}`);
    }
    get age() {
        return this._age;
    }
    set age(age){
        if(typeof age === 'number' && age > 0 && age <100){
            this._age = age;
        }else{
            console.log('недопустимое значение')
        }
    }
}

const ivan = new Author('Ivan', 25);

console.log(ivan.name);
ivan.age = 99;
console.log(ivan.age);
ivan.say();

// аннимная самовызывающаяся функция

const num = 1;

(function(){
    let num = 2;
    console.log(num);
    console.log(num + 1);
}());

console.log(num);

const user = (function(){
    const privat = function(){
        console.log('i am privat');
    };
    return {
        sayHello: privat //экспортируем наружу локальную свойство
    }
}());

user.sayHello();

// Рабочий вариант 3 (Error)

console.log("Запрос данных...");
const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Подготовка данных...");

        const product = {
            name: 'phone',
            price: 300
        };
        resolve(product);
    },2000);
});

req.then((product)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            product.status = 'order';
            reject();
        }, 2000);
    });
}).then(data=>{
    data.modify = 'true';
    return data;
}).then(data=>{
    console.log(data);
}).catch(()=>{
    console.error('ERROR!')
});

// Рабочий вариант 4 (finnaly)

console.log("Запрос данных...");

const req  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Подготовка данных...");
        const product = {
            name: 'phone',
            price: 300
        };
        resolve(product)
    },2000);
});

req.then((product)=>{
    return new Promise((resove, reject)=>{
        setTimeout(()=>{
            product.status = 'order';
            resolve(product);
            reject();
        }, 2000);
    });

}).then(data=>{
    data.modify = 'true';
    return data;
}).then(data=>{
    console.log(data);
}).catch(()=>{
    console.error('ERROR!')
}).finally(()=>{
    console.log("Все действия выполнены!");
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(4000), test(1000)]).then(()=>{
    console.log('All');
});

