//

console.log('hello');

// func type
type User = {
  name: string;
  id: string;
};


const users: User[] = [
  {
    id: '1',
    name: 'John',
  },
  { id: '2', name: 'Jane' },
];


type MakeChange = (user: User) => User;

const makeChange = (user: User): User => {
  return {...user, name :"unknown"}
}
const modifyUser = (users: User[], id: string, makeChange: MakeChange ): User[] => {
  return users.map((user): User => {

    if (id === user.id) {
      return makeChange(user)
    } else {
      return user
    }
})
};

modifyUser(
  users, '1', makeChange)
const newUser = makeChange({ id: "123", name: "abc" })
console.log(newUser)
