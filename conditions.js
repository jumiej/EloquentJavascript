// if (x === 5 || 7 || 10 || 20) {
// 	// run my code
//   }  // This is not logically correct, we are supposed to declare every statement as they appear  

//   if (x === 5 || x === 7 || x === 10 || x === 20) {
// 	// run my code
//   }



// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout
//   });

  
//   readline.question('please enter a number', (input) => {	
// 	readline.close();


// 		const checkNumber = parseFloat(input);
// 		if(input < 18){
// 			console.log("you are not eligible to vote")
// 		}else if (input > 18){
// 			console.log("you are an adult now, you can register for voters card")

// 		}
// 		// else if(isNaN(checkNumber)) {
// 		// 	reject(new Error('Invalid input, please enter a valid number'))
// 		// }else {
// 		// 	resolve (checkNumber)
// 		// }
	
//   });



  const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  });
  
  readline.question('what is the weather condition?', (response) => {
	readline.close();

	const getWeather = () => {	
	const weather =  isStringObject (response);
		if (weather === "sunny") {
			console.log(  "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.")
		} else if (weather === "rainy"){
			console.log( "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.")
		}
		else if (weather === "snowing") {
			console.log("The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.")
		}
		else if (weather === "overcast") {
			console.log( "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.")
		}
		else ("Please get the exact weather condition")
	}

  }
  );

  

///  Ternary operator///

var num = 4, msg = "";
msg = (num === 4) ? "Correct!" : "Incorrect!";
console.log(msg);


const score = 80
let scoreRating

scoreRating = (score < 30) ? "Excellent" : "Do better!"
console.log(scoreRating)

const  Ternary = () => {
	let num1 = 10
	let num2 = 20
	return res = (num1>num2) ? (num1+num2) : (num1-num2);
}

console.log("Ternary operator", Ternary())





