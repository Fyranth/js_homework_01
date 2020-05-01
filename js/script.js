
//Функция для первого задания
function firstTask() {
    //debugger; 
    //получаем переменные с верификацией заполнения
    let square = parseInt(document.getElementById('square-size').value)*100;
    if (isNaN(square)) {alert('не указана площадь участка'); return;};
    let bed_width = parseInt(document.getElementById('bed-width').value);
    if (isNaN(square)) {alert('не указана ширина грядки'); return;};
    let bed_height = parseInt(document.getElementById('bed-height').value);
    if (isNaN(square)) {alert('не указана высота грядки'); return;};

    //рассчитываем значения
    let bed_square = bed_height*bed_width;
    let bed_cnt = parseInt(square/bed_square);
    let square_free = (square % bed_square);

    let Result_str = `Площадь участка: ${square} м2 \nПлощадь грядки: ${bed_square} м2 \nКоличество грядок: ${bed_cnt} шт \n Остаток свободной площади: ${square_free} м2`;

    document.getElementById('ft-result').innerText = Result_str;
}

//Функция для второго задания
function secondTask() {
    //debugger;
    let squareBig = parseInt(document.getElementById('big-elipse-size').value)*100;
    if (isNaN(squareBig)) {alert('не указана площадь болшьшего элипса'); return;};
    let squareSmall = parseInt(document.getElementById('small-elipse-size').value);
    if (isNaN(squareSmall)) {alert('не указана ширина грядки'); return;};
    let squareCircle =  squareBig-squareSmall;
    let Result_str = `Площадь кольца: ${squareCircle} см2`;

    document.getElementById('st-result').innerText = Result_str;
}

//Функции для третьего задания
function thirdTask() {
    //подберем через сравнение
    let minNumber = '';
    let number1 = parseInt(document.getElementById('tt-number1').value);
    if (isNaN(number1)) {alert('не заполнено число 1'); return;};
    let number2 = parseInt(document.getElementById('tt-number2').value);
    if (isNaN(number2)) {alert('не заполнено число 2'); return;};
    let number3 = parseInt(document.getElementById('tt-number3').value);
    if (isNaN(number3)) {alert('не заполнено число 3'); return;};

    minNumber = (number1 < number2 && number1 < number3) ?  number1 : 
    (number2 < number1 && number2 < number3) ? number2 :
    (number3 < number1 && number3 < number2) ? number3 : number1;

    let Result_str = `Мин. число сравнением: ${minNumber}`;

    //Подберем сортировкой массива
    let array = [number1,number2,number3];
    array.sort();
    minNumber = array[0];
    Result_str = Result_str + `\nМин. число сортировкой массива: ${minNumber}`;

    //подберем через функцию min
    minNumber = Math.min(number1,number2,number3);
    Result_str = Result_str + `\nМин. число функцией Math.min(): ${minNumber}`;

    document.getElementById('tt-result').innerText = Result_str;
}



function thirdTaskOnload() {
    //debugger;
    var number1 = getRandomInt(0,100);
    document.getElementById('tt-number1').value = number1;
    var number2 = getRandomInt(0,100);
    document.getElementById('tt-number2').value = number2;
    var number3 = getRandomInt(0,100);
    document.getElementById('tt-number3').value = number3;
}


//Функции чертвертого задания
function fourthTask() {
    //подберем через сравнение
    let minNumber = '';
    let control = parseInt(document.getElementById('fourth-control').value);
    if (isNaN(control)) {alert('не заполнено число контроль'); return;};
    let number1 = parseInt(document.getElementById('fourth-number1').value);
    if (isNaN(number1)) {alert('не заполнено число 1'); return;};
    let number2 = parseInt(document.getElementById('fourth-number2').value);
    if (isNaN(number2)) {alert('не заполнено число 2'); return;};

    let delta1 = (control>number1) ? control-number1 : number1-control;
    let delta2 = (control>number2) ? control-number2 : number2-control;

    let resNumber = (delta1 > delta2) ? number2 : number1;
   
    let Result_str = `Ближайшее к контролю число: ${resNumber}`;
    document.getElementById('fourth-result').innerText = Result_str;
    console.log(Result_str);
    
}



function fourthTaskOnload() {
    //debugger;
    var number1 = getRandomInt(0,100);
    document.getElementById('fourth-control').value = number1;
    var number2 = getRandomInt(0,100);
    document.getElementById('fourth-number1').value = number2;
    var number3 = getRandomInt(0,100);
    document.getElementById('fourth-number2').value = number3;
}


//Функции пятого задания
function fifthTask() {
    //Получаем наборы координат
    //Вершина А
    let a_x = parseInt(document.getElementById('fifth-a-x').value);
    if (isNaN(a_x)) {alert('не заполнена координата x вершины А'); return;};
    let a_y = parseInt(document.getElementById('fifth-a-y').value);
    if (isNaN(a_y)) {alert('не заполнена координата y вершины А'); return;};
    let a_z = parseInt(document.getElementById('fifth-a-z').value);
    if (isNaN(a_z)) {alert('не заполнена координата z вершины А'); return;};
    //Вершина B
    let b_x = parseInt(document.getElementById('fifth-b-x').value);
    if (isNaN(b_x)) {alert('не заполнена координата x вершины B'); return;};
    let b_y = parseInt(document.getElementById('fifth-b-y').value);
    if (isNaN(b_y)) {alert('не заполнена координата y вершины B'); return;};
    let b_z = parseInt(document.getElementById('fifth-b-z').value);
    if (isNaN(b_z)) {alert('не заполнена координата z вершины B'); return;};
    //Вершина С
    let c_x = parseInt(document.getElementById('fifth-c-x').value);
    if (isNaN(c_x)) {alert('не заполнена координата x вершины C'); return;};
    let c_y = parseInt(document.getElementById('fifth-c-y').value);
    if (isNaN(c_y)) {alert('не заполнена координата y вершины C'); return;};
    let c_z = parseInt(document.getElementById('fifth-c-z').value);
    if (isNaN(c_z)) {alert('не заполнена координата z вершины C'); return;};
    let Result_str = '';
    //Считаем длину отрезка AB
    //let AB = ((b_x-a_x)**2+(b_y-a_y)**2+(b_z-a_z)**2)**1/2;
    let AB = Math.sqrt((b_x-a_x)**2+(b_y-a_y)**2+(b_z-a_z)**2);
    AB = (AB<0) ? -AB : AB;
    Result_str = `Длина отрезка AB: ${AB}\n`;
    //Считаем длину отрезка ВС
    //let ВС = ((c_x-b_x)**2+(c_y-b_y)**2+(c_z-b_z)**2)**1/2;
    let ВС = Math.sqrt((c_x-b_x)**2+(c_y-b_y)**2+(c_z-b_z)**2);
    ВС = (ВС<0) ? -ВС : ВС;
    Result_str = Result_str+`Длина отрезка ВС: ${ВС}\n`;
    //Считаем длину отрезка ВС
    //let CA = ((a_x-c_x)**2+(a_y-c_y)**2+(a_z-c_z)**2)**1/2;
    let CA = Math.sqrt((a_x-c_x)**2+(a_y-c_y)**2+(a_z-c_z)**2);
    CA = (CA<0) ? -CA : CA;
    Result_str = Result_str+`Длина отрезка CA: ${CA}\n`;

    //Проверяем прямоугольность треугольника по теореме пифагора
    let res = (AB**2 === ВС**2 + CA**2) ? true : (ВС**2 === AB**2 + CA**2) ? true : (CA**2 === AB**2 + ВС**2) ? true : false;
    Result_str = Result_str+`Треугольник прямоугольный: ${res}`;

    document.getElementById('fifth-result').innerText = Result_str;
    console.log(Result_str);
    
}



function fifthTaskOnload() {
    //debugger;
    /*var number1 = getRandomInt(0,100);
    document.getElementById('fourth-control').value = number1;
    var number2 = getRandomInt(0,100);
    document.getElementById('fourth-number1').value = number2;
    var number3 = getRandomInt(0,100);
    document.getElementById('fourth-number2').value = number3;*/
    let div_collection = document.getElementsByClassName("fifth-input");
    let i=0;
    for (i=0;i<div_collection.length;i++) {
        let el_div = div_collection[i];
        let in_col = el_div.getElementsByTagName("input");
        let inp = in_col[0];
        inp.value = getRandomInt(0, 10);
    }; 
}





//Вспомогательные функции
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }