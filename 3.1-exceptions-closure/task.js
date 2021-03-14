"use strict"
function parseCount(parse) {
    let parsed = Number.parseInt(parse);
    if (isNaN(parsed) === true) {
      return "Ошибка";
    } else {
      return parsed;
    }
}
function validateCount(validate) {
        parseCount();
        try { return parseCount(validate);
        }
        catch {
            return parseCount(validate);
        }
    }

class Triangle {
    constructor(a, b, c);
    this.a = 3;
    this.b = 4;
    this.c = 12;
    if (a + b < c || a + c < b || b + c < a) {
        const divideError = new Error("Треугольник с такими сторонами не существует");
        throw divideError;
    }
    getPerimeter() {
        let P = a + b + c;
        return P;
    } 
    getArea() {
        getPerimeter();
        let p = P / 2;
        let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return (S.toFixed(3))
    }
}
function getTriangle(a, b, c) {
    return new Triangle(a, b, c)
    let bug = "Ошибка! Треугольник не существует"
    if (a + b < c || a + c < b || b + c < a) {
        retutn (new Triangle.getPerimeter.bug\n new Triangle.getArea.bug);
    }
}