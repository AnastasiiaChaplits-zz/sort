"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharacterCollection_1 = require("./CharacterCollection");
// const numbersCollection = new NumbersCollection([10, 3, -5, 30]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
var charactersCollection = new CharacterCollection_1.CharactersCollection('XhdvTlacD');
var soter = new Sorter_1.Sorter(charactersCollection);
soter.sort();
console.log(charactersCollection.data);
