const myArr =[1,2,3,4]
// console.log(myArr);

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const new_heros = marvel_heros.concat(dc_heros)
// console.log(new_heros);
 
const comb_heros = [...marvel_heros,...dc_heros]
// console.log(comb_heros);

const another_arr = [1,2,3,[4,5,6],7,[6,[5,4]]]
const real_another_array =another_arr.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shivam"))
console.log(Array.from("Shivam"))

let score1=100
let score2=300
let score3=400
console.log(Array.of(score1,score2,score3))








