import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharacterCollection';

// const numbersCollection = new NumbersCollection([10, 3, -5, 30]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XhdvTlacD');
const soter = new Sorter(charactersCollection);
soter.sort();
console.log(charactersCollection.data);
