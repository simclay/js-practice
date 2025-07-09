const name ="shivam"
const repoCount = 50

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); //string interpolation

const gameName = new String('Shivam')

// console.log(gameName[0]);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));

//length provide length of string , toUpperCase convert all lowercase or all the string charac to uppercase, charAt give the character present at that index.


// console.log(gameName.indexOf('v'));

//gives the index of the string character

 const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString =gameName.slice(-4,4)
// console.log(anotherString);

// substring and slice is used to get new continous string from the string present slice support negative numbering also 

const trimString = "   ruby  "
// console.log(trimString);
// console.log(trimString.trim()); // trim is used to trim left and right of string while trimend to trim end part or trimstart to trim start part are also available

const url = "https://shivam.com/shivam%20awana"
const newUrl = url.replace('%20','-') // replaces the value given with the value or character we want
console.log(newUrl);

console.log(url.includes('sam'));

const splitString = "new-name-guddu"
console.log(splitString.split('-')); // split the string in an array with the split symbol or the mark given in string at everypoint

console.log(gameName.charCodeAt('3')); //char code at return ascii value of the character stored at that index

const padString = "huhu"
console.log(padString.padEnd(6,"."));

//secure a no

// const accNo = "784512367895"
// const last4Dig = accNo.slice(-4)
// const secureNo = last4Dig.padStart(accNo.length,"*")
// console.log(secureNo);

const mood = "angry !"
console.log(`My mood is ${mood.repeat(3)}`);







 












