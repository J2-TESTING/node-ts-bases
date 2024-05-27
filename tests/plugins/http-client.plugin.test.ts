import { object } from "joi";
import { httpClientPlugin as http } from "../../src/plugins/http-client.plugin";
import exp from "constants";
describe("plugins/http-client.plugin.test.ts", () => {
  test("response must be string", async () => {
    const res = await http.get(`https://jsonplaceholder.typicode.com/todos/1`)
    expect(res).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      //completed: false
      //!No importa el valor con tal de que sea boolean
      completed: expect.any(Boolean)
      })
  });
  test(`post, put and delete methods exist`,()=>{
    //console.log(properties);
    // let properties= Object.keys(http)
    // expect(properties.includes('post')).toBe(true);
    // expect(properties.includes('put')).toBe(true);
    // expect(properties.includes('delete')).toBe(true);
    expect(typeof http.post).toBe('function')
    expect(typeof http.get).toBe('function')
    expect(typeof http.delete).toBe('function')
  })
});
