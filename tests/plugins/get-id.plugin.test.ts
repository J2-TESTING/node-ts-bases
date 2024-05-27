import { getUUID } from "../../src/plugins/get-id.plugin";

describe("plugins/get-id.plugin.test.ts", () => {
  
  const uuid = getUUID();
  test("uuid must be string", () => {
    
    expect(typeof uuid).toBe("string");
  });
  test("uuid legnth must be characters", () => {
     
     expect(uuid.length).toBe(36);
  });

  test('uuid format correct',()=>{
    const format = uuid.split('-')
    console.log({format})
     expect(format.length).toBe(5)
  })
});