"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];
function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        // setTimeout(()=> {
        //   callback(`User not found with id ${id}`,undefined);  
        // },2500)
        // return
        callback(`User not found with id ${id}`, undefined);
        return;
    }
    callback(undefined, user);
    return;
}
exports.getUserById = getUserById;
