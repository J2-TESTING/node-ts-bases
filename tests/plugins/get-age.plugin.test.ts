import { getAge } from '../../src/plugins/get-age.plugin';
describe('plugins/get-age.plugin.test.ts',()=>{

  test('getAge() must be a number',()=> {
    const birthdateArg='1979-03-24'
    const age=getAge(birthdateArg)
    expect(typeof age).toBe('number');
  })

  test('getAge() must be return age',()=> {

    const birthdayArg='1979-03-24'
    const age1=getAge(birthdayArg);
    const age2= new Date().getFullYear() - new Date(birthdayArg).getFullYear();
    expect(age1).toBe(age2)
  })

  test('getAg() shpuld return 0 years',()=>{
    const birthdayArg='1979-03-24'
    //Modificamos el valor del metodo getFullYear() del prototype del objeto date
    const spy=jest.spyOn(Date.prototype,'getFullYear').mockReturnValue(1979)
    const age=getAge(birthdayArg)
    expect(age).toBe(0)
    //verificamos si el spy fue llamado
    expect(spy).toBeCalledWith()



  })
})

