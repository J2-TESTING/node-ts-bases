//! Importamos el sujeto de pruebas
import { characters } from "../../src/js-foundation/02-destructuring";

console.log(characters)
describe('js-foundation/02-destructuring.ts', () => {

  test('charactes Array should containt Flash, Superman elements', () => {

    expect( characters ).toContain('Flash');
    expect( characters ).toContain('Superman');

  });


  test('first character should be Flash, and second Superman', () => {
    //! Arrange
    const [ flash, superman ] = characters;
    //! Assert
    expect( flash ).toBe('Flash');
    expect( superman ).toBe('Superman');

  });


});
