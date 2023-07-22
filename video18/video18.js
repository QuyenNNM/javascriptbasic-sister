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