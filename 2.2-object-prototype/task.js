"use strict"

String.prototype.isPalindrome = function isPalindrome () {

}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = (new Date).getTime();
    let date = Date.parse(birthday);
    console.log(typeof(birthday));
    console.log(date);
    let diff = Math.round((now - date)/(1000*60*60*24));
    console.log(diff);
    let averageMonth = 30.44;
    let age = Math.floor(diff/(averageMonth*12));
    console.log(age);
    if (age >= 18 ) {
        return age;
    }
}