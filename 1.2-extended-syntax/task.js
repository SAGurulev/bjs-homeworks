"use strict"
function getResult(a,b,c){
let diskriminant = (b ** 2) - (4 * a * c);
let x = [];
if (diskriminant == 0) {
    x[0] = (((-b) + Math.sqrt(diskriminant)) / (2 * a))
} else if (diskriminant > 0) {
    x[0] = (((-b) + Math.sqrt(diskriminant)) / (2 * a))
    x[1] = (((-b) - Math.sqrt(diskriminant)) / (2 * a));
}
     return x;
}

function getAverageMark(marks){
    let score = marks;
    let quantityScore = score.length;
    let average = 0;
    let arrayScore = [];
    
    if (quantityScore == 0) {
        return 0
    };

    arrayScore = score.splice(5);
    for (let i = 0; i < score.length; i++) {
        average = average + score[i]
    }
    average = average / score.length
    return average;


    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    let result;
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }

    // код для задачи №3 писать здесь
    return result;
}