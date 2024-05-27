// import { getPokemonById } from "./js-foundation/06-promises";
// import { buildLogger } from "./plugins/logger.plugin";
//import { getAge, getUUID } from './plugins';


// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
//import { child } from 'winston';
//import { getUserById } from './js-foundation/03-callbacks';
// const { getUserById } = require('./js-foundation/04-arrow');
//import { buildMakePerson } from './js-foundation/05-factory';

// getUserById(1,(err,user)=>{
//     console.log({err})
//     console.log(user);
    
// })
// console.log("Hola Mundo")
import {getPokemonById} from './js-foundation/06-promises';

 
// const logger = buildLogger('app.js');

// logger.log('Hola mundo');
// logger.error('Esto es algo malo');

getPokemonById(4)
  .then( ( pokemonData ) => console.log({ pokemonData }) )
  .catch( ( err ) => console.error( err ) )
  .finally( () => console.log('Finalmente') );






// token de acceso
// Publicas


// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = makePerson( obj );
// console.log({ john });






