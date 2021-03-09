function getSolutions(a, b, c) {
    let D = (b ** 2) - (4 * a * c);
    if (D < 0) {
        return {
            D,
            roots: []
        };
    } else if (D === 0) {
        let x1 = (((-b) + Math.sqrt(D)) / (2 * a));
        return {
            D,
            roots: [x1]
        };
    } else if (D > 0) {
        let x1 = (((-b) + Math.sqrt(D)) / (2 * a))
        let x2 = (((-b) - Math.sqrt(D)) / (2 * a));
        return {
            D,
            roots: [x1, x2]
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    if (result.D < 0) {
        return (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значение дискриминанта: ${D}\n Уравнение не имеет вещественных корней`)
    } else if (result.D === 0) {
        return (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значение дискриминанта: ${D}\n Уравнение имеет один корень X₁ = ${x1}`)
    } else if (result.D > 0) {
        return (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значение дискриминанта: ${D}\nУравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`)
    }
}


function getAverageScore(data) {
    let diploma = {};
    let diplomaAverage = [];
    for (let prop in data) {
        diploma[prop] = getAverageMark(data[prop]);
        diplomaAverage.push(getAverageMark(data[prop]));
    }
    diploma.average = getAverageMark(diplomaAverage);
    return diploma;
}

function getAverageMark(marks) {
    let quantityScore = marks.length;
    let average = 0;

    if (quantityScore == 0) {
        return 0;
    }
    
    for (let i = 0; i < marks.length; i++) {
        average = average + marks[i];
    }
    average = average / marks.length;
    return average;
}

function getPersonData(secretData) {
    let pirat = {};
    pirat.firstName = getDecodedValue(secretData["aaa"]);
    pirat.lastName = getDecodedValue(secretData["bbb"]);
    return pirat;
}
function getDecodedValue(secret) {
    let name;
    if (secret == 0) {
        name = "Родриго";
    } else {
        name = "Эмильо";
    }
    return name;
}