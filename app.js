const firstName = 'William';
const lastName = 'Johnson';
const age = 38;

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Luis ';
val += 'Carrazco';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('2');
val = firstName.lastIndexOf('l');

// CharAt()
val = firstName.charAt('2');


console.log(val);
