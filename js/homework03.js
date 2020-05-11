//Задание №1
/*console.log('Задание №1');
let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
let CBegin = A.slice(), CEnd = A.slice();

//вариант №1 - c помощью цикла
//console.log('вариант №1');
for(let i=0; i<B.length; i++) {
    CEnd.push(B[i]);
}
//console.log("Добавил 'B' в конец массива", CEnd);

//т.к. мы добавляем В в начало массива циклом - итерации ведем от большего индекса к меньшему
for(let i=B.length-1; i>=0; i--) {
    CBegin.unshift(B[i]);
}
//console.log("Добавил 'B' в начало массива", CBegin);

//Вариант 2 - concat
console.log('вариант №2');
CEnd = [];
console.log("Добавил 'B' в конец массива", CEnd.concat(A,B));
CBegin = [];
console.log("Добавил 'B' в начало массива", CBegin.concat(B,A));


//Задание №2
let deck_array = [1, null, 0, null, 1, null, null, null, null];

let deck = '<div id="deck">';

for(let i=0; i<deck_array.length; i++) {
    let j = (deck_array[i]==1)?'&#10008;':(deck_array[i]==0)?'O':'';
    deck += `<div class="deck-cell">${j}</div>\n`;
}
deck += '</div>';
document.write(deck);


//Задание №3
console.log("Задание №3");

let nums = [12,4,3,10,1,20];
console.log("Дано: ", nums);
//определим максимальное и минимальное значение
//Вариант 1
let max = nums[0], min = nums[0];

for(let i = 1; i<nums.length; i++) {
    max = (nums[i]>max)? nums[i]:max;
    min = (nums[i]<min)? nums[i]:min;
}

//Вариант 2 
let nums_copy = nums.slice();
//сортируем массив
nums_copy.sort(function(a, b) { return a - b; });
//минимальное число в начале массива, максимальное в конце.
min = nums_copy[0]; max = nums_copy[nums_copy.length-1];

console.log('min:'+min, 'max: '+max);

//удаляем элементы из массива
nums.splice(nums.indexOf(min), 1);
nums.splice(nums.indexOf(max), 1);

console.log(nums);

//Задание №4
console.log("Задание №4");

let result = [];
let str_lenght = 6; 
for(let i=1; i<=999999; i++) {
    //Превращаем число в строку и добавляем впередистоящие 0 если надо
    let Str = i.toString();
    while(Str.length<str_lenght){ Str = "0"+Str }

    //Разобьем строку в массив и сразу приобразуем элементы в число
    let arr = Str.split("").map(Number);
    
    //Получми 2 части массива в новые массивы и просуммируем их
    let arr1 = arr.slice(0, arr.length/2);
    let sum1 = arr1.reduce(function(sum, current) {return sum + current;}, 0);

    let arr2 = arr.slice(arr.length/2);
    let sum2 = arr2.reduce(function(sum, current) {return sum + current;}, 0);

    if(sum1 == sum2) {
        result.push(Str);
    }
}

console.log("Всего счастливых билетов: "+result.length);
console.log(result);*/

//Задание №5
console.log("Задание №5");
let mol = "2,7,4,1,8,1";

mol = prompt("Введите список массы молекул, через запятую", mol);
let weights = mol.split(",");
console.log("Вы ввели следующие данные", mol);

if(weights.length>0){
    //Преобразуем значения массива в числа
    weights.map(Number);
    
    while(weights.length>=2){
        //Отсортируем в порядке возврастания
        weights.sort(function(a,b){return b-a});
        //Берем 2 максимальныз веса
        let max1 = weights[0];
        let max2 = weights[1];
        let delta = max1-max2;
        if(delta !== 0) {weights.push(delta)}

        weights.splice(0,2);
    }
    
    
    (weights.length==1) ? console.log("Осталась молекула весом: ", weights[0]) :  console.log("Молекул не осталось");

} else { console.log("Вы ввели пустой список")}

