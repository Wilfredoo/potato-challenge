import {water, soil} from './jsFiles/conditions'
import {potato_seeds, number_of_varieties} from './jsFiles/seeds'
import {time} from "./jsFiles/time"


// console.log("water", water)
// console.log("soil", soil)
// console.log("potatoe seeds?", potato_seeds)
// console.log("num of varieties?", number_of_varieties)
// console.log("time", time)
// console.log()

const importantInfo = `If apocalypse ever happens, I'll be safe cuz I can grow my own potatoes.
Wanna learn how too? Lemme tell ya:
First of all, potatoes need water ${water.frequency} from different sources
like ${water.sources[0]}, ${water.sources[1]} or ${water.sources[2]}. 
They can grow in different kinds of soils, as long as the PH is somewhere between
${soil.min_ph} and ${soil.max_ph}. Potatoes looove ${soil.type} soil.
But like all good things in life, potatoes need time to grow. About ${time} to be exact.
There are so many to choose! About ${number_of_varieties}, .
The main ones though, are ${potato_seeds}
Live long and prosper.`;

console.log("important info", importantInfo)