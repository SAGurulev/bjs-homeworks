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
    // let n = (new Date().getDate() - Number(date).new Date(date).getDate)/30;
    // let times = new Date(); //получаем текущаю дату
    // let value = times.getTime(); //данное выражение получить числовое значение текущей даты в милисикундах
    // let value2 = date.getTime();
    // let value3 = value2 - value; //разница в милисекундах между датами
    // let day = 1000 * 60 * 24 * 60; //количество милисекунд в одном дне
    // let days = value3 / day;
    let day = (date.getTime() - (new Date()).getTime()) / (1000 * 60 * 24 * 60);
    let month = 30.4375; //среднее количество дней в месяце
    let months = Math.round(day / month); // количество месяцев до ближайшего целого
    let n;
    if (months > 0 ) {
        n = months;
    } else {
        (n = (day / month).toFixed(1));//вычесление в дробном виде не целого месяца(0.5, 0.3, дня)
    }
    let P = (percent / (12 * 100));
    let S = parseInt(amount) - parseInt(contribution);
    if (n <= 0) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${Number(date)}`;
    }
    let payment = S * (P + P / (((1 + P) ** n) - 1));
    let totalAmount = parseFloat((payment * n).toFixed(2)); //строку в вещественное число
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    if (name === undefined || name === "" || typeof(name) === "number" || typeof(name) === "boolean" || name === " ") {
        return `Привет, мир! Меня зовут Аноним.`
    } else {
      return `Привет, мир! Меня зовут ${name}.`
    }
}