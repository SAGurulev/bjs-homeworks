"use strict"

String.prototype.isPalindrome = function isPalindrome () {
        let stringLower = this.toLowerCase();
        console.log(stringLower);
        let strDelete = stringLower.split(" ").join('');
        console.log(strDelete);
        let strRevers = strDelete.split("").reverse().join('');
        console.log(strRevers);
        return strDelete === strRevers;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let quantityScore = marks.length;
    let average = 0;

    if (quantityScore == 0) {
        return 0;
    }
    
    for (let i = 0; i < marks.length; i++) {
        average = average + marks[i];
    }
    average = average / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = (new Date).getTime();
    let date = Date.parse(birthday);
    let diff = Math.round((now - date)/(1000*60*60*24));
    let averageMonth = 30.44;
    let age = Math.floor(diff/(averageMonth*12));
    if (age >= 18 ) {
        return age;
    }
}