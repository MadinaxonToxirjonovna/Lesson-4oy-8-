// const array = ["Jasur", "Madina", "Xusniya", "Nasiba"]

// array = [];

let array = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(array, "boshlanishidagi array");
juft = []

for (let i = 0; i < array.length; i++) {
let check = array[i] % 2;

if (check === 0) {
    juft.push(array[i])
}
}
console.log(juft,"juft sonlarga ajratilgan array");
// array .unshift(i)
