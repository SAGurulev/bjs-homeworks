"use strict"
//Задача 1
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

// console.log(weapons);
function getNames() {
  return weapons.map(function(f) {
    return f.name;
  });
}
// console.log(getNames());
function getCountReliableWeapons(parametr) {
  let prochnost = weapons.filter(function(item) {
    return item.durability > parametr;
  });
  return prochnost.length;
}
function hasReliableWeapons(parametr) {
  let all = weapons.map(function(f) {
    return f.durability;
  });
  let all2 = all.some(function(durability) {
    return durability > parametr;
  });
  return all2;
}
// console.log(getCountReliableWeapons(400))

hasReliableWeapons(700)
function getReliableWeaponsNames(parametr) {
  let prochnost2 = weapons.filter(function(item) {
    return item.durability > parametr;
  });
  let names = prochnost2.map(function(f) {
    return f.name;
  });

  return names;
}

getReliableWeaponsNames(200);
function getTotalDamage() {
    let allDurability = weapons.reduce(function (parametr, element) { 
    
    return parametr + element.attack;
    
    }, 0);
   return allDurability;
  }
  getTotalDamage();
//Задача 2

//Задача 3