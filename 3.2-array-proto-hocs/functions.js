"use strict"
//Задача 1
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(item => item.name);
}

function getCountReliableWeapons(param) {
    return weapons.filter(item => item.durability > param).length;
}

function hasReliableWeapons(param) {
    return weapons.map(item => item.durability).some(elem => elem > param);
}


function getReliableWeaponsNames(param) {
    return (weapons.filter(item => item.durability > param)).map(item => item.name);
}


function getTotalDamage() {
    return weapons.reduce((prev, cur) => prev + cur.attack, 0);
}
//Задача 2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }
  function compareArrays( arr1, arr2 ) {
    return compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
    // return arr1.filter(function(i) {return arr2.indexOf(i) < 0;});
  }

  function memorize(fn, limit) {
    const memory = [];

    return function newF(...args) {
        const value = memory.find(item => compareArrays(item.args, args));

        if (value) {
            return value.result;
        }

        const result = fn(...args);

        if (memory.length > limit) {
            memory.shift();
        }
        memory.push({
            args,
            result
        });
        return result;
    }
}