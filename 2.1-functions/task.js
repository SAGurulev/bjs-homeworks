function getSolutions( a, b, c ) {
    let D = (b ** 2 ) - (4 * a * c);
    let x1 = [];
    let x2 = [];
        if (D < 0) {
        return D;
    } else if (D == 0) {
        x1[0] = (((-b) + Math.sqrt(D)) / (2 * a));
        return (D, x1)
    } else if (D > 0) {
        x1[0] = (((-b) + Math.sqrt(D)) / (2 * a))
        x2[0] = (((-b) - Math.sqrt(D)) / (2 * a));
        return (D, x1, x2)
    }
}

function showSolutionsMessage( a, b, c) {
     let result = getSolutions(a, b, c);
    return (`Вычисляем корни квадратного уравнения ax² + bx + c. Значение дискриминанта: ${D}`; 
}


function getAverageScore(data) {

}
function getAverageMark(marks) {

}

function getPersonData(secretData) {

}
function getDecodedValue(secret) {
    
}