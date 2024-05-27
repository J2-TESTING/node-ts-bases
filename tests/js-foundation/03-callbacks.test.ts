import { getUserById } from "../../src/js-foundation/03-callbacks";


describe('js-foundation/03-callbacks.ts', () => {


  test('getUserById should return an error if user does not exist', (done) => {

    const id = 10;
    //const id = 1;

    getUserById(id, (err, user) => {

      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      //expect(err).toBeUndefined();
      

      //!Con el done(), que es necesario cuando se usa callbacks, le decimos a Jest que no termine la prueba hasta terminar todos los tests
      done();
    });

  });


  test('getUserById should return John Doe', (terminado) => {

    const id = 1;

    getUserById(id, (err, user) => {

      expect(err).toBeUndefined();
      // expect(user).toBe({
      //   id: 1,
      //   name: 'John Doe',
      // })
      expect(user).toEqual({
        id: 1,
        name: 'John Doe',
      })

      terminado();
    });

  });



});

