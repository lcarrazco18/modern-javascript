let val;

// Number to string
val = String(555);
val = String(4+4);
// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());
