"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (percent <= 0 || typeof(percent) === "undefined") {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }
    if (contribution < 0 || typeof(contribution) === "undefined") {
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
    }
    if (amount <= 0 || typeof(amount) === "undefined") {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    }
    let n = (new Date().getDate() - Number(date).new Date(date).getDate)/30;
    let P = (percent / 12 / 100);
    let S = parseInt(amount) - parseInt(contribution);
    if (n <= 0) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${Number(date)}`;
    }
    let payment = S * (P + P / (((1 + P) ** n) - 1));
    let totalAmount = (payment * n).toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    if (name == falsy) {
        return `Привет, мир! Меня зовут Аноним.`
    } else {
    return `Привет, мир! Меня зовут ${name}.`
    }
    // return (`Привет, мир! Меня зовут ${(name) || "Аноним".}`)
}