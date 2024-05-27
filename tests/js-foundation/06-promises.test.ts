import { getPokemonById } from '../../src/js-foundation/06-promises';
describe('js-foundation/06-promises.ts',  () => {
  test('getPokemonById should return a valid pokemon',async ()=> {
    const pokemonId =1 
    const pokemonName= await getPokemonById(pokemonId);
    expect(pokemonName).toBe('bulbasaur');
  })

  test('Should return a error message if the pokemon doesnt exist' ,async () => {
    const pokemonId=5000;
    try {
      await getPokemonById(pokemonId);
      //No es necesaria esta validacion desde mi optica
      //expect(true).toBeFalsy()
    } catch (error) {
      //! esta es la manera de hacer un test de una funcion que devuelve una excepcion.
      expect(error).toBe(`Pokemon not found with id ${ pokemonId }`)
    }
    
    
  })
})