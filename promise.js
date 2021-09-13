"use strict";

const person = {
    name: 'Alex',
    age: 28
}
//такой формат мы уже можем отправлять на сервер

let toServer = JSONstringify(person);
console.log(toServer);

let fromServer = JSON.parse(toServer);
console.log(fromServer);

//глубокое клонирование объекта

const clone = JSON.parse(JSON.stringify(person))