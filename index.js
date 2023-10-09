// Функція, яка рахує суму цілих чисел від 1 до 15   for
function calcSum1() {
    let sum = 0;
    for (i = 1; i <= 15; i++) {
        sum = i + sum;
    }
    console.log('Сума всіх цілих чисел від 1 до 15 =', sum);
}
calcSum1();



// Функція, яка рахує суму цілих чисел від 1 до 15    while
function calcSum2() {
    let b = 1;
    let sumB = 0;
    while (b <= 15) {
        sumB = sumB + b
        b++
    }
    console.log('Сума всіх цілих чисел від 1 до 15 =', sumB)
}
calcSum2();



// Функція, яка рахує суму цілих чисел від 1 до 15   do   while
function calcSum3() {
    let i = 1;
    let sum = 0;
    do {
        sum = sum + i;
        i++
    } while (i <= 15)
    console.log('Сума всіх цілих чисел від 1 до 15 =', sum)
}
calcSum3();


// Функція, яка рахує добуток всіх цілих чисел від 15 до 35   do   while
function calcProduct1() {
    let a = 15;
    let res = 1;
    do {
        res = res * a;
        a++
    } while (a <= 35)
    console.log('Добуток всіх цілих чисел від 15 до 35 =', res)
}
calcProduct1();


// Функція, яка рахує середнє арифметичне всіх цілих чисел від 1 до 500   for
function calcAverage1 () {
let sum = 0;
for (i = 1; i <= 500; i++) {
    sum = i + sum;
}
console.log('Середнє арифметичне всіх цілих чисел від 1 до 500 = ', sum / 500);
}
calcAverage1();

// Функція, яка рахує cуму парних чисел від 30 до 80   for
function calcEvenNumber1 () {
let sum = 0;
for (let c = 30; c <= 80; c++) {
    if (c % 2 !== 0) {
        continue;
    }
    sum = c + sum;
}
console.log('Сума парних чисел від 30 до 80 = ', sum);
}
calcEvenNumber1();


function createPythagoreanTable() {
    let prod = ' ';
    for (let x = 1; x < 11; x++) {
        for (let y = 1; y < 11; y++) {
            prod = prod + x * y + ' ';
        }
        console.log(prod);
        prod = ' ';
    }
}
createPythagoreanTable();



// for (let i = 2; i <= 10; i++) {
//     console.log(`Таблиця множення для ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//         let result = i * j;
//         console.log(`${i} * ${j} = ${result}`);
//     }
//     console.log();
// }