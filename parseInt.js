const handleParseInt = (str)=> {
    return parseInt(str);
}

let temp = handleParseInt('3.12')
let num = handleParseInt('100')
let check1 = handleParseInt('2002@jumie.com')
let check2 = handleParseInt("jumie2002@.com")
let check3 = handleParseInt("20 7 05 10")



const checkParseInt = (elem, ind) => {
    return parseInt(elem, ind) 
}
let f = checkParseInt("100", 10)
let g = checkParseInt("8", 8) 
let h = checkParseInt("15", 8) 
let i = checkParseInt("16",16)
let j = checkParseInt(" 100 ")
let l = checkParseInt("0 * 16")



const checkFloat = (atm) => {
    return parseFloat(atm)
}


// Return value///
const Profile = () => { 
    const fname = "john"
    const lname = "peter"
    const  occupation = "dev"
    return [fname, lname, occupation]
}

console.log("This are the return value",Profile())



let floatA = checkFloat(3.142)
let floatB = checkFloat("3.142")
let floatC = checkFloat(" 3.142 ")
let floatD = checkFloat(" 3.142e-2")
let floatE = checkFloat("0.03142E+2")
let floatF = checkFloat("3.142need something freshing for the night")


console.log("I am handling parseInt here ", temp)
console.log("I am handling parseInt here ", num)
console.log("I am handling parseInt here ", check1)
console.log("I am handling parseInt here ", check2)
console.log("I am handling parseInt here ", check3)

console.log("I am handling parseInt with two param here ", f)
console.log("I am handling parseInt with two param here ", g)
console.log("I am handling parseInt with two param here ", h)
console.log("I am handling parseInt with two param here ", i)
console.log("I am handling parseInt with two param here ", j)
console.log("I am handling parseInt with two param here ", l)


console.log("checking float react here", floatA )
console.log("checking float react here", floatB )
console.log("checking float react here", floatC )
console.log("checking float react here", floatD )
console.log("checking float react here", floatE )
console.log("checking float react here", floatF + " " + "need something freshing for the night")




const mean =  () => {
    const add = [1, 2,  3,  4, 5]
    const sum = add.reduce((a,b ) => a + b) 
    const length = add.length
    return sum / length 
}
console.log("finding the mean", mean())

///Define a functions that returns the value of (n + m) / (o * p)///
let n = 10
let m = 5
let o = 1
let p = 3

const Arithmetics = () => {
    let addition = n + m 
    let multiplication = o * p
    return addition / multiplication
}
console.log("Doing some arithmetic operator", Arithmetics())