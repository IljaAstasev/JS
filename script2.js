"use strict";

// const obj = new Object(); // Один из вариантов создания обътектов

// самый частый вариант создания объекта

const option = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(option.name);
console.log(option['name']); // реже исполуемый вариант нотации

// delete option.name; // удаление какого-либо свойства из объекта

console.log(option);

// перебрать все элементы объекта

for (let key in option){
    console.log(`Свойство ${key} имеет значение ${option[key]}`);
}

let counter = 0;
for (let key in option){
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]){
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
            counter++;
        }
    }else {
        console.log(`Свойства ${key} имеет значение ${option[key]}`);
        counter++;
    }
}