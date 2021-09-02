"use strict";

const typeGoods = 'food';


console.log(`https://market.com/${typeGoods}`);

//-------------2------------//

let number = 10;

function showMessage(text) {
    console.log(text);
    // let number = 20;
    console.log(number);
}
showMessage("hello!!!");
console.log(number);

const server = function() {
    console.log('server start . .. ');
};

server();

const calc = (x, y) => x+y;

console.log(calc(10,5));

// -------------3------------//
function server(){
    setTimeout(function(){
        console.log(1);
    },1000)
}
    function foo(){
        console.log(2);
    }
    
server();
foo();
    
function serverNew(host, callback){
    console.log(`Server ${host} is starting`);
    callback();
}

function done(){
    console.log('connect success!');
}

serverNew('MyServer', done);

// -----------------task-----------------------//
const test = () => {
    console.log('Hello user');
 return Math.PI;}

console.log(test());

//-----------call-back task------------//

