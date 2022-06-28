let x = 5;
let y = 3;
let z = x * y;
console.log("Das Ergebnis der Multiplikation ist: " + z)

const one = 'Hello, ';
const two = 'how are you?';
const joined = `Hello ${one}${two}`;
console.log(joined); // "Hello, how are you?"

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log(txt, length)    

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
// alert(str);
// alert(part);

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText);


 text = "5";
let padded = text.padStart(4,"x");
console.log(text, "\n", padded);

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

