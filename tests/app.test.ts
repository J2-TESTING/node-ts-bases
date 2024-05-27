
//A A A 

describe('Test in the App File', () => {

  test('should be 30', () => {

    // 1. Arrange
    //! Preparamos lo que vamos a probar en el test
    const num1 = 10;
    const num2 = 20;

     // 2. Act
     //! Aqui es el estimulo donde ejecutamos algo
     const result = num1 + num2;


    // 3. Assert
    //! Esperamos que el resultado sea 30
    expect( result ).toBe(30);

      

  });

});