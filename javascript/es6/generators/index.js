function* greet () {
  let friendly = yield 'How';
  friendly = yield friendly + 'are';
  yield friendly + 'you?';
}

const greeter = greet();
console.log(greeter.next().value);
console.log(greeter.next(' the heck are ').value);
console.log(greeter.next(' silly ol ').value);