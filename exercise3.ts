/*
Write a module that
- Imports Traveler and TravelerType
- Creates a traveler intance
- Write to console the traveler full name
*/

import {Traveler, TravelerType} from "./Traveler"

let miguel = new Traveler("Miguel", "", "Cobá", TravelerType.Adult);

console.log(miguel.fullName);