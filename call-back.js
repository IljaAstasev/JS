"use strict"

console.log("Запрос данных...");

setTimeout(()=>{
    console.log("Подготовка данных...");


const product = {
    name: 'phone',
    price: 300
};

setTimeout(()=> {
    product.status = 'order'
    console.log(product);
}, 2000);

},2000);

// тоже самоe, но с испoльзованием Promise

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
    const req2 = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
    req2.then((data)=>{
        console.log(data)
    })
});

// рабочий вариант

console.log("запрос данных...");
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
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then((date)=>{
    console.log(data);
});

// Рабочий вариант 2

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
        setTimeout(()=> {
            product.status = 'order';
            resolve(product);
        },2000);
    });
}).then(data=>{
    data.modify = 'true';
    return data; 
}).then(data=>{
    console.log(data);
});

// Рабочий вариант 3 (error)

console.log("Запрос данных...");
const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Подготовка данных...");
        const product = {
            name: "phone",
            price: 300
        };
        resolve(product);
    },2000);
});

req.then((product)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            product.status = 'order';
            //resolve(product);
            reject();
        },2000);
    });
}).then(data=>{
    data.modify = 'true';
    return data;
}).then(data=>{
    console.log(data);
}).catch(()=>{
    console.log('ERROR!')
}
);

//Рабочий вариант 4 (Finaly)

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
        setTimeout(()=> {
            product.status = 'order';
            resolve(product);
            reject();
        },2000);
    });
}).then(data=> {
    data.modify = 'true';
    return data;
}).then(data=>{
    console.log(data);
}).catch(()=>{
    console.log('ERROR!')
}.finally(()=>{
    console.log("Все действия выполнены")
}