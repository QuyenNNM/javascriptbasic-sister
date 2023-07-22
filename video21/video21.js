// #25 Tìm Kiếm với Filter/Find Trên Mảng Array Dữ Liệu
console.log('Hello world from HTML'.toUpperCase())

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr2 = [
    {name: 'Eric', age: 25},
    {name: 'ABC', age: 23},
    {name: 'Monica', age: 31},
    {name: 'Ross', age: 23},
    {name: 'Hoi Dan IT', age: 14},
]
// mapp
let mapArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < mapArr.length; i++) {
    mapArr[i] = mapArr[i] * mapArr[i];
}
console.log('check value arr: ', mapArr)

let mapArray = mapArr.map((item, index) => {
    item = item * item;
    return item;
})
console.log('check value array: ', mapArray);
console.log('check value Map Array: ', mapArray)

// let filter = arr1.filter((item, index) => {
//     console.log('>>> check filter: ', item, 'index: ',index)
//     return item && item > 5;
// });
// filter timf ko ra thif trar veef roong con find tim khoong thay thif tra vef unifi

// let filter = arr2.filter((item, index) => {
//     return item && item.age === 23;
// });

let filter = arr2.find((item, index) => {
    return item && item.age === 23;
});


console.log(filter)