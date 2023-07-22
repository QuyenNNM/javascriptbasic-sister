// arrow functions
console.log('Hello world from HTML'.toUpperCase())

let sum = (a, b) => {
    return a + b;
}

console.log('Check sum: 9 + 6 = ' , sum(6,9))

let obj = {
    name: 'Eric',
    address: 'Ha Noi',
    getName: function() { 
        return this.name; 
    }
}

console.log('>>> get Name obj: ', obj.getName());

let summ = (a, b, callback) => {
    let tong = a + b;
    setTimeout(() => { 
        callback(tong);
    }, 5000)

    // setInterval(() => {
    //     callback(tong);
    // }, 1000)

    let i = 0;
    let timer = setInterval(() => {
    callback(tong);
    i++;
    if(i == 5) {
        clearInterval(timer);
    }
    }, 1000);
}

let printSum = (message) => {
    console.log('>> check sum: 6 + 9 = ', message)
}

summ(6,9,printSum) 

