"use strict"

function parseCount(parse) {
    let parsed = Number.parseInt(parse);
    if (Number.isNaN(parsed)) {
      throw new Error ("Невалидное значение");
    } 
    return parsed;
}

function validateCount(validate) {
    try {
        return parseCount(validate);
    }
    catch(e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (c + b) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = (this.getPerimeter()) / 2;
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        let myTriangle = new Triangle(a, b, c);
        return myTriangle;
    } catch (e) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        }
    }
}