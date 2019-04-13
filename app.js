const color = 'red';

switch(color){
    case 'red':
    console.log('Color is red');
    break;
    case 'blue':
    console.log('Color is blue');
    break;
    default:
    console.log('Color is not red or blue');
}

let day;

switch(new Date().getDay()){
case 0:
    day = 'Sunday';
case 1:
    day = 'Monday';
case 2:
    day = 'Tuesday';
case 3:
    day = 'Wednesday';
case 4:
    day = 'Thursday';
case 5:
    day = 'Friday';
case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);
