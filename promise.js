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

const clone = JSON.parse(JSON.stringify(person));
clone.name = 'Ann';
console.log(person);
console.log(clone);

/* /Задание  
 Создать объект из 6 полей и вложенного в него объекта из 2 полей
  преоброзовать в json 
  вывести в консоль
  Преобразовать получившийся json обратно в объекта
  вывести в консоль
  найти онлайн конвертер json - xmlю Посмотреть как данный объект будет в xml    
  создать клон этого объекта

  изменить люьое поле 
  вывыести в консоль старый объект и его клон. Убедиться, что объекты разные  

