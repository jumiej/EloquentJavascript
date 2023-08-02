/////////////////////Strings/////////////////

///Write a function that will return a string in in a new line///
 const strManiputation = "Hello, world, \nI will like to explore you some day.";
 const strManiputation2 = "Hello, RB, <br/> can i see your effect on this sentence?"
 const strManiputation3 = `Hello, backslash,
I'm just checking some breaking changes`

const getProfile= () =>{
 const profile = {
    name:"jumie",
    age : 20,
    status :"complicated",
     location: "Enugu"
  }

  return profile
}

const myProfile = getProfile();
console.log(getProfile())


console.log (myProfile)
// Define a function that will return tab a string///
var TAB = "\n";

// primitive strings (literal)///
const myName = "Akin";
const myName2 = 'Jumie';
const myName3 = `Oju`;


// non-primitive  are called string object 
const myName4 = "This is a string object";
const myName5 = new String (myName4);

const myGender = "I'm a female"
const gender = new String (myGender);

const declare =() =>{
    const myDeclaration = "This is a string object";
    return myDeclaration
}

const Declare = declare()

////////////////OR////////////

const girl = new String ("I'm a girl")

/////////////////Conversions of numeric types//////////// 
const Number = "2 + 2";    //primitive
const objString = new String ("2 + 2")  //string object


const add = (a, b) =>{
    return (a + b);
}

 const result = add (3,5)
console.log( "Result", result)

////////////////////////// Strings and it's Properties///////////////////
//  charAt()
// 	toUpperCase()
// 	toLowerCase()
// 	split()
// 	concat()
// 	replace()
// 	indexOf()
// 	match()
// 	slice()
// 	toString()
// 	subString()

///charAt///
const Event = "Holiday is coming soon"

///toUpperCase() OR toLowerCase///
// const summer = "summer is here"

const FlexPeriod =()=>{
    const summer = "summer is here";
    return summer.toLocaleUpperCase()
}

const summerDays = FlexPeriod()
///	split///
const check = "The kitchen pipe is faulty";

///concat///
const adage1 = "hard work doesn't kill"
const adage2 ="but laziness do."

const wiseMan = () =>{
    const adage1 = "hard work doesn't kill" 
    const adage2 ="but laziness do."
    // const adage3 = adage1 + adage2 
    return( adage1 + ' ' + adage2 )
}

console.log( "aaaaaaaa", wiseMan())

const dadsAdage = wiseMan()
console.log( "BabaMi's adage is", dadsAdage)

///replace///
// const vividImagination = "I would like to take myself on a treat"
// const secondImagination = vividImagination.replace("treat", "holiday")
 
const vividImagination = () => {    
    const Imagination = "I would like to take myself on a treat"
    return Imagination.replace("treat", "holiday")
}
const myReality = vividImagination()

console.log(myReality)


///indexOf///
// const programming = "I would like to learn something about programming languages"
const learn =  () =>{
    const programming = "I would like to learn something about programming languages"
    return programming.indexOf(2)
}
const myWishes = learn()
console.log(myWishes)

///match///
const like = "I would like to  learn javaScript not java"
const res = like.match(/java/g)
const response = like.match(/java/)

///slice///
const stage = "I'm a child"

///toString///
// const truth = new String(confession)

const saySomething = () => {
    const confession = "i am going through a lot in my head"
    return confession
}
const alot = saySomething()

console.log("substrings of my confession", alot.substring(0, 9))
console.log("substrings of my confession" ,alot.substring(9, 0))
console.log("substrings of my confession",  alot.substring(0, 15))

///subString///
const hero = "champions don't loose"

// check spam //

function checkSpam(str) {
    // let check = str.toLowerCase();
    let checkViagra = "is viagra here ?"
    let xxx = "Are there xxx here?"
    let innocentRabbit = "We are here?"

    return  (checkViagra.includes("viagra") || xxx.includes("xxx"))
}


console.log( checkSpam("buy ViAgRA now"))
console.log( checkSpam("free xxxxxx"))
console.log( checkSpam("innocent rabbit"))


console.log(summerDays)
console.log(Declare)
console.log(strManiputation)
console.log(strManiputation2)
console.log(strManiputation3)
console.log("Column1" + TAB + "Column2" + TAB + "Column3")
console.log("Column4\nColumn5\nColumn6")
console.log(myName)
console.log(myName2)
console.log(myName3)
console.log(myName5)
console.log(gender)
console.log(girl)
console.log(eval(Number))
console.log(eval(objString.valueOf()))
console.log(`The character in index 0 is  '${Event.charAt(4)}'`)
console.log(`The character in index 0 is  '${Event.charAt(5)}'`)
console.log(`The character in index 0 is  '${Event.charAt(6)}'`)
console.log(`The character in index 0 is  '${Event.charAt(8)}'`)
console.log(`The character in index 0 is  '${Event.charAt(9)}'`)
console.log(`The character in index 0 is  '${Event.charAt(11)}'`)
console.log(`The character in index 0 is  '${Event.charAt(12)}'`)
console.log(`The character in index 0 is  '${Event.charAt(13)}'`)
console.log(`The character in index 0 is  '${Event.charAt(14)}'`)
console.log(`The character in index 0 is  '${Event.charAt(15)}'`)
console.log(`The character in index 0 is  '${Event.charAt(16)}'`)
// console.log(summer.toUpperCase())
// console.log(summer.toLowerCase())
console.log(check.split(' '))
console.log(check.split(''))
console.log(check.split(' ' ,3))
console.log(adage1.concat(' ',adage2))
// console.log(secondImagination)
// console.log(programming.indexOf(2))
console.log ("here is res", res) 
console.log("here is response", response)
console.log(stage.slice(6, 11))
console.log(stage.slice(4, 11))
// console.log(confession.toString())
// console.log(truth.toString())



///////////////////Numbers//////////////////
// toString
// toExponential
// toPrecision
// tofixed
// valueOf
//toLocaleString
//parseInt(string,[radix])
//parseFloat(string)
//isSafeInteger
//isInteger
//isFinite
//isNaN


///toString///
let x = 1675;
let y = x.toString();

///toExponential///
let z = 2.478

//// toPrecision///
// let z = 2.478

///tofixed///
let k = 5.782


///valueOf///
const  s = 6789


///toLocaleString///
const myDate = new Date
 let myCurrentDate = myDate.toLocaleString()

 let p = new String (30000);
 const myCurr = {
    style:"currency",
    currency:"EUR"
 }
 const myMoney = p.toLocaleString("en-GB" , myCurr)

///parseInt(string,[radix])///
// ///with only String///
// let a = parseInt("3.147") //returns integer value of a floating number
// let b = parseInt("100")
// let c = parseInt("2002@jumie.com")  //it returned integer until it encountered not a number character
// let d = parseInt("jumie2002@.com")  //it returned NaN 
// let e = parseInt("20 7 05 10") // it returned the first integer value it encountered

    const handleParseInt = (str)=> {
        return handleParseInt(str)
    }

    handleParseInt('3.12')
    // handleParseInt('100')
    // handleParseInt('2002@jumie.com')
    // handleParseInt("jumie2002@.com")
    // handleParseInt("20 7 05 10")

    console.log("I am handling parseInt here ", handleParseInt)




///with both String and radix///
// let f = parseInt("100", 10) // returns 10
// let g = parseInt("8", 8) // returns NaN because is not up to hexadecimal
// let h = parseInt("15", 8) // returns 
// let i = parseInt("16",16)
// let j = parseInt(" 100 ")
// let l = parseInt("0 * 16")

// const parse = (a,b) => {
//     return parse
// }
//  let parseIn = parse(parseInt("100", 10))
 
//  console.log("parseInF",parseIn())

//  const parseG = ()=> {
//     return parseG(parseInt("8", 8))
 
//   let parseGG = parseG(parseInt()/)
//  console.log("parseGG",parseG())

//  const parseH = () => {
//     return(parseInt("15", 8))
//  }
// console.log("parseH",parseH())

// const parseI = ()=> {
//     return parseInt("20 7 05 10")
// }

// console.log("parseI" , parseI())
 
///parseFloat(string)
// let floatA = parseFloat(3.142)
// let floatB = parseFloat("3.142")
// let floatC = parseFloat(" 3.142 ")
// let floatD = parseFloat(" 3.142e-2")
// let floatE = parseFloat("0.03142E+2")
// let floatF = parseFloat("3.142need something freshing for the night")
// let floatG = parseFloat({
//     toString(){
//         return "3.142"
//     }
// })

///isSafeInteger///  
// let integerA = Number.isSafeInteger(23)
// let integerB = isSafeInteger(-23)
// let integerC = isSafeInteger("23")
// let integerD = isSafeInteger(23.5)
// let integerE = isSafeInteger(23/2)
// let integerF = isSafeInteger(30/3)
// let integerG = isSafeInteger(0/0)



// parseFloat
// let floatC = 
// let floatD = parseFloat(" 3.142e-2")
// let floatE = parseFloat
// let floatF = parseFloat
// let floatG = parseFloat({
//     toString(){
//         return "3.142"
//     }



/// isFinite ///

let jumieA =  isFinite(23)
let jumieB = isFinite('jumie')
let jumieC = isFinite(0)
let jumieD = isFinite(Infinity)
let jumieE = isFinite(-Infinity)
let jumieF = isFinite(null)
let jumieG = isFinite(NaN)

///isNaN///

let testA = isNaN(12)
let testB = isNaN(0)
let testC = isNaN(0/0)
let testD = isNaN(12.6)
let testE = isNaN("giberdashhhhhh")
let testF = isNaN("12")
let testG = isNaN(-12)
let testH = isNaN(NaN)





// console.log(y)
// console.log((1234).toString())
// console.log((75 + 15).toString())
// console.log(z.toExponential(0))
// console.log(z.toExponential(1))
// console.log(z.toExponential(2))
// console.log(z.toExponential(3))
// console.log(z.toExponential(4))
// console.log(z.toExponential(5))
// console.log(z.toPrecision())
// console.log(z.toPrecision(1))
// console.log(z.toPrecision(2))
// console.log(z.toPrecision(3))
// console.log(z.toPrecision(4))
// console.log(z.toPrecision(5))
// console.log(z.toPrecision(6))
// console.log(k.toFixed(0))
// console.log(k.toFixed(1))
// console.log(k.toFixed(2))
// console.log(k.toFixed(3))
// console.log(k.toFixed(4))
// console.log(k.toFixed(5))
// console.log(k.toFixed(6))
// console.log(s.valueOf())
// console.log((23 + 45).valueOf())
// console.log(myDate)
// console.log(myMoney)
// console.log('using parseInt("3.147") = ' + a)
// console.log('using parseInt("100") = ' + b)
// console.log('using parseInt("2002@jumie.com") = ' + c)
// console.log('using parseInt("jumie2002@.com") = ' + d)
// console.log('using parseInt("20 7 05 10") = ' + e)
// console.log('using parseInt("100" 10) = ' + f)
// console.log('using parseInt("8" 8) = ' + g)
// console.log('using parseInt("15", 8) = ' + h)
// console.log('using parseInt("16" 16) = ' + i)
// console.log('using parseInt(" 100 ") = ' + j)
// console.log('using parseInt( " 0 x 16") = ' + l)
// console.log("using parseFloat(3.142) = " + floatA)
// console.log("using parseFloat('3.142') = " + floatB)
// console.log("using parseFloat('0.03142E+2') = " + floatC)
// console.log("using parseFloat(' 3.142e-2') = " + floatD)
// console.log("using parseFloat('3.142need something freshing for the night') = " + floatE)
// // console.log(Number.isInteger(453)); // true
// // console.log(Number.isInteger(-44)); // true
// // console.log(Number.isInteger(5.0)); // true
// // console.log(Number.isInteger(456.129)); // false
// // console.log(Number.isInteger(Math.PI)); // false
// console.log(jumieA)
// console.log(jumieB)
// console.log(jumieC)
// console.log(jumieD)
// console.log(jumieE)
// console.log(jumieF)
// console.log(jumieG)
// console.log("isNaN(12)= " + testA ) 
// console.log("isNaN(0) =" + testB );
// console.log("isNaN(0 / 0) =" + testC);
// console.log("isNaN(12.6)= " + testD);
// console.log('isNaN("giberdashhhhhh") =' + testE);
// console.log('isNaN("12") =' + testF);
// console.log("isNaN(-12) = " + testG);
// console.log("isNaN(NaN) = " + testH);


////////////////////boolean//////////////////////////////////

///boolean Variables///
///boolean used in conditional statements///
///boolean Expressions///
///boolean Function///
///boolean Object///
///Boolean vs boolean///


///boolean Variables///
let YES = true
let NO = false

const checkOfficeHour = () => {
    let hour = 9;
    if(false)  {
        return `it is office hour which ${hour}`

    } else {
        return "We are close for the day"
    }
}

///boolean used in conditional statements///
// const checkTemperature = () => {
//     let temperature = 30  
//     let yourAge = 15
// if ( temperature < 32){
//     return("its cold out there");
//     }elseif(temperature > 20); {
//         return "put on snowJacket";
//     }elseif ( yourAge >= 0);{
//     return("congrats! you were born");
// }elseif ( yourAge = 0);{
//     return("you're  just a baby")
// }elseif ( yourAge <= 3);{
//     return("you can not even speak yet! How can you code?")
// }elseif ( yourAge = 5);{
//     return("Get ready for your first ever day of school")
// }elseif ( yourAge  <= 16);{
//     return("You can drive! Maybe! Check your state law")
// }elseif ( yourAge  <= 18 );{
//     return("You are now legal, you have the right to vote ")
// }elseif ( yourAge <= 21);{
//     return("you are eligible for public office")
// }elseif ( yourAge <= 35);{
//     return("You can run for president now")
// }elseif ( yourAge <= 65);{
//     return("You can retire")
// }
    
// }


// console.log(" cccccccccccccc",checkTemperature())
// console.log("ddddddd", yourAge)

// let temperature = 30
// if ( temperature < 32){
//     console.log("its cold out there")
// }

// let tempStatues = temperature < 32
// if ( tempStatues){
//     console.log("put on snowJacket")
// }

// let yourAge = 15
// if ( yourAge >= 0){
//     console.log("congrats! you were born")
// }

// if ( yourAge = 0){
//     console.log("you're  just a baby")
// }

// if ( yourAge <= 3){
//     console.log("you can not even speak yet! How can you code?")
// }

// if ( yourAge = 5){
//     console.log("Get ready for your first ever day of school")
// }

// if ( yourAge  <= 16){
//     console.log("You can drive! Maybe! Check your state law")
// }

// if ( yourAge  <= 18 ){
//     console.log("You are now legal, you have the right to vote ")
// }

// if ( yourAge <= 21){
//     console.log("you are eligible for public office")
// }

// if ( yourAge <= 35){
//     console.log("You can run for president now")
// }

// if ( yourAge <= 65){
//     console.log("You can retire")
// }


///boolean Expressions///
let w = 20;
let v = 10
let sum1 = w * 2
let sum2 = v * 2 

// const happy = true

examine = w == v
// examine = w > v 
// examine = w < v
// examine = sum2 > sum1
// examine = sum1 > sum2


///boolean Function true//
/// They convert the first parameter to a boolean and then return true for any non-empty, non-zero, object, or array.///
let b2 = Boolean('Hello, world')
// let b3 = Boolean('W') 
let b4 = Boolean({}) 
let b5 = Boolean([])

///boolean Function false//
///The parameter of a boolean to return false are  0, -0, "", null, or undefined values///

let b6 = Boolean(0)
let b7 = Boolean(-0)
let b8 = Boolean('')
let b9 = Boolean(null)
let b10 = Boolean(undefined)

///boolean Object///
var bool = new Boolean(true);


///Boolean vs boolean///
var B = new Boolean(true);
var boo = true;

typeof B; // object
typeof boo; // boolean

///////////////////////////////////////////bigInt//////////////////////////////////////////
let large =  333333333333333333333333
let large2 =  333333333333333333333333n

let huge = 12345n
let huge2 = 12345n
let huge3 =  huge + huge2

// console.log(examine)
console.log(YES) 
console.log(NO)
console.log( "it is " + ' ' + YES + ' ' + " because its YES") 
console.log( "While it is " + ' ' + NO  + ' ' + " because its NO") 
console.log("w == v is " + examine)
// console.log( "w > v is " + result2)
// console.log("w < v is " + result3)
// console.log("sum2 > sum1 is " + result4 )
// console.log("sum1 > sum2 is " +  result5)
console.log( "boolean be2 is " + ' ' + b2)
// console.log("boolean be3 is " + ' ' + b3)
console.log("boolean be4 is " + ' ' + b4)
console.log("boolean be5 is " + ' ' + b5)
console.log("boolean be6 is " + ' ' + b6)
console.log("boolean be7 is " + ' ' + b7)
console.log("boolean be8 is " + ' ' + b8)
console.log("boolean be9 is " + ' ' + b9)
console.log("boolean be10 is " + ' ' + b10)
console.log(bool)
console.log(typeof(bool) )
console.log(large)
console.log(large2)
console.log(huge3)
console.log( typeof(huge3))



////////////////////////////////////Undefined//////////////////////
///when trying to access properties or values that does not exist in variable///
let empty;

let profile = {
    myName: "jumie",
    myStatus: "single"
}

let data = [7,8,3,5,6]


// console.log(empty);
// console.log(profile)
// console.log(profile .hubby)
// console.log(data)
// console.log( "4 can not be found, it is" + ' ' + data[4])
// console.log( "9 can not be found, it is" + " " + data[9])

// if(profile.hubby === undefined){
//     console.log("hubby is undefined")
// }

// if(typeof profile.hubby === "undefined"){
//     console.log("oops hubby no dey ")
// }


// if(data[4] === undefined){
//     console.log("4 can not be found")
// }

// if(typeof data[2] === "undefined"){
//     console.log("oops 2 no dey ")
// }

///////////////////////////////////////null////////////////////////////////////////
// let Award = {primary: "good",  secondary: "best", tertiary: "Excellent"}
// Award = null
// console.log(Award)
// console.log(typeof( Award))


// const var1 =null;
// if(var1 === null){
//     console.log("var1 is null")
// }else{
//     console.log("var1 is not null")
// }


//////////////////////////////symbols///////////////////////////////////////////////////

let value1 = "Hello"
let value2 = "Hello"
let checking = Symbol("hey")


///symbol as an object key///
let id = Symbol("id")
let person ={
    name: "John",
    age: 21,
    [id] : 17
}
person.id = 2

// console.log( "check is" + value1 === value2 )
// console.log(typeof(checking))
// console.log(checking.description)
// console.log(person)
// for(let key in person){
//     console.log(key)
// }
// console.log(person.id)



////////////////////////////////////////////Object///////////////////////////
///object initializer or plain object///

const myCar = {
    color: "matted Black",
    wheel: 4,
    engine: {cylinder:4, size: 2.3}
}

///Using Construction Function ///
function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

const familyCar = new Car("Lexus", "IS XE20", 2021, "livinus")
const MumCar = new Car("Nissan", "300ZX", 2013,)


function Person(name, age, sex ){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const staff1 = new Person("Micheal", 22, "M")
const staff2 = new Person("Nancy", 20, "F")

console.log(myCar.engine) 
console.log(myCar.engine.cylinder) 
console.log(familyCar)
console.log ('The owner of the car is ' + ' '+ familyCar.owner) 
console.log(familyCar.make) 
console.log(MumCar.model)
console.log(staff1.name)  // dot notation
console.log(staff1['name'])  // bracket notation
console.log(staff2.age) 


////////////////Functions//////////////////

// function square has both parameter and a return statement and they
//  are executed when the function is been called, but function makeNoises
//   do not have a parameter nor a return statement, so it returned undefined
//    instead but by instantiation we will be able execute it.

// function Square(x) {
//     return x * x
// }
// console.log(Square(12))


// function makeNoise(){
//     console.log("Pling")
// }
// makeNoise()

// function add(a, b){
//     return a + b;
// }
// console.log(add(3,5))


///////////////EndFunctions//////////////////


/////////Recursion///////////
// function isEven(n){
//     n= Math.abs(n);
//     if(n === 0){
//         return true;
//     }
//     else if(n === 1){
//         return false;
//     }
//     else return isEven(n-2) 

// }
// console.log(isEven(50))


////////Bean Counting////////////
// function countBs(x){
//     var count = 0;
//     for(i = 0; i < x.length; i++){
//         if(x.charAt(i) === "B")
//         count++;

//     }
//     return count
// }
// console.log(countBs("MEIEFBJUIEGWCBBBIIEKB"))


// function countChars(x, y){   
//  var count = 0  
//  for(var i=0; i < x.length; i++){
//     if(x.charAt(i) === y)
//     count++;
//  }

//     return count;
// }

// console.log(countChars("nmfrrkkmkwsxdkk", "m"))