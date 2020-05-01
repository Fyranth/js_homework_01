function task01 () {
    let month = parseInt(document.getElementById("month").value);
    let resultstr = "";
    if (month > 12 || month < 1) {alert("Простите, но в году только 12 месяцев."); return;}
    if (month === 12 || month === 1 || month === 2 ){
        resultstr = "Зима";
    }  else if (month === 3 || month === 4 || month === 5 ) {
        resultstr = "Весна";
    }  else if (month === 6 || month === 7 || month === 8 ) {
        resultstr = "Лето";
    }  else if (month === 9 || month === 10 || month === 11 ) {
        resultstr = "Осень";
    }

    document.getElementById("task-result-01").innerText = resultstr;
}

function task02 () {
    let length = parseInt(document.getElementById("length").value);
    let radios = document.getElementsByName("unit");
    let unit=0;
    
    for (let i=0;i<radios.length;i++) {
        if (radios[i].checked) {unit=parseInt(radios[i].value); break;}
    }
    let result = 0;

    switch (unit) {
        case 1:
            result = length/10;
            break;
        
        case 2:
            result = length*1000;
            break; 

        case 3:
            result = length;
            break;         
        
        case 4:
            result = length/100;
            break;
            
        case 5:
            result = length/1000;
            break;                       

    }
    
    document.getElementById("task-result-02").innerText = result + " м.";

}

function task03 () {
    let number = parseFloat(document.getElementById("number").value);
    let resultstr = "";
    if (!Number.isInteger(number)) {alert("Введено не целое число"); return;}

    if (number==0){
        resultstr = "нулевое число";
    }  else if (number<0) {
        if (number>-10){
            resultstr = "Отрицательное однозначное число";
        } else if (number> -100) {
            resultstr = "Отрицательное двузначное число";
        } else if (number<=-100) {
            resultstr = "Отрицательное трехзначное число";
        }
    }  else if (number>0) {
        if (number<10){
            resultstr = "Положительное однозначное число";
        } else if (number<100) {
            resultstr = "Положительное двузначное число";
        } else if (number>=100) {
            resultstr = "Положительное трехзначное число";
        }
    }

    document.getElementById("task-result-03").innerText = resultstr;
}

function task04 () {
    let numberMin = parseInt(document.getElementById("numberMin").value);
    let numberMax = parseInt(document.getElementById("numberMax").value);
    if (numberMin >= numberMax) {alert("Что то пошло не так. Числа попутались!"); return;}
    for (let i=numberMin; i<=numberMax; i++) {
        if (!(i%3) && !(i%5) ){
            console.log("ThreeFive");
        } else if (!(i%3) && i%5) {
            console.log("Three");
        } else if (i%3 && !(i%5)) {
            console.log("Five");
        } else {
            console.log(i);
        }
    }
}

function task05 () {
    let year = parseInt(document.getElementById("year").value);
    let resultstr = "";
    //cheat
    let isLeap = new Date(year, 1, 29).getMonth() == 1;
    resultstr = (isLeap) ? "по читу - год високосный\n" : "по читу - год не високосный\n";
    
    if (!(year%4)) {
        resultstr = resultstr + "Год делиться на 4. Проверяем дальше..";
        if (year%100 == 0) {
            resultstr = resultstr + "\nГод делиться на 100. Проверяем дальше..";
            if (year%400 == 0) {
                resultstr = resultstr + "\nГод делиться на 400. \n год високосный";    
            }  else {resultstr = resultstr + "\nГод не делиться на 400. \n год не високосный";} 
        } else {resultstr = resultstr + "\nГод не делиться на 100. \n год високосный";}  
    } else {resultstr = "Год не делиться на 4. Год не високосный";}

    document.getElementById("task-result-05").innerText = resultstr;
}

function task06() {
    let plates = parseInt(document.getElementById("plate").value);
    let wash = parseInt(document.getElementById("wash").value);
    let resultstr = "";
    for (;;) {
        if (plates == 0 || wash == 0 )  {
            resultstr = `Осталось:\n ${wash} моющего средства\n ${plates} тарелок`;
            break;
        } else {
            plates -= 1; wash -= 0.5;
            console.log(`осталось моющего средства: ${wash}`);
        }
    }
    document.getElementById("task-result-06").innerText = resultstr;
}