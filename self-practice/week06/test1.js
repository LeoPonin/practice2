const greet = (name, formatter) => formatter(name);
const shout = text => text.toUpperCase() + '!!!'
const wonder = nam => nam.toUpperCase() + '???'
console.log(greet("alice", wonder)); // "alice???"
console.log(greet("alice", shout)); // "ALICE!!!"
