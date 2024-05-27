interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  }
];


export function getUserById( id: number, callback: (err?: string, user?:User)=> void  ) {
  const user = users.find( function(user){
    return user.id === id;  
  });

  if( !user ) {
    // setTimeout(()=> {
    //   callback(`User not found with id ${id}`,undefined);  
    // },2500)
    // return
    callback(`User not found with id ${id}`,undefined);  
    return 
  }
  callback( undefined, user );
  return 
}


