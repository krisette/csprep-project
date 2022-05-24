// Title: "Carnivore Cooking Game"
// Authors: Jia Gan, Jesaca Lin, Janet Nguyen, Krisette Odegard
// Created for CodeSmith CS Prep WHM
// Version 1.0.0, last edited 5/22/2022

// game objective 
// create the wildest dish from what is available in your fridge 
// list item in fridge 
// Categories - Protein(Jia), Vegetable(jesaca), Carbs(krisette), Spices(Janet) 
// number of item in each category - 2
// user plug in items from each category 
// store it in object 
// Randomly generate a recipe from items inserted 
//

// Pasta - Spaghetti
// Stir Fried - Rice 
// Soup - Broth 
// Sandwich - Bread 

//FAIL - Vegan? Download something else.

// initialize empty obj that holds the player input
const playerInput = {};


// Get to the fridge 
function walkToFridge() {
  let walk1 = prompt("You wake up after a nap in your new mansion and find yourself starving. What do you do? \n \n 1. Get up and cook up some food in your new kitchen. \n 2. Look for your phone and order takeout instead. \n \n Which option would you like to choose? Please type '1' or '2'.")
  
if (walk1 == "1") {
	let walk2 = prompt("Wonderful! Let me guide you to the kitchen. First lets choose a direction. Right or left? \n \n 1. Right \n 2. Left \n \n Which option would you like to choose? Please type '1' or '2'.");
  
	if (walk2 == "1") {
		alert("Hey, look -- there are cookie crumbs on the floor! You are so hungry at this point that you decided that stale cookie crumbs are better than nothing! As you munch on the cookie crumbs, you continue following the trail of it... \n \n And TADA! \n \n You've made it to the kitchen!");
	}
	else if (walk2 == "2") {
		alert("You took a big step towards the left... \n \n uh oh! \n \n There was a portal and fell into a different dimension where you work as a chef! I guess it is time to cook! "); 
	}
	else {
		alert("Error! You must enter '1' or '2'.")
	}
}
else if (walk1 == "2") {
	let walk2 = alert("You feel around in your jeans and successfully find your phone. It's almost dead, but you quickly call the nearest Chinese restaurant. Unfortunately, they are closed.\n \n Sad day. I guess, you'll have to make something yourself!");
}
else {
	alert("Error! You must enter '1' or '2'.")
  }
}
walkToFridge(); 

// player will input their name
let name = prompt ('Welcome Chef, what is your name?');
alert (`Welcome, Chef ${name}!`);

// 'messages' object holds game text
const messages = {
A : 'Today we are going to be making a dish using the left over ingredients in your fridge, are you up to the challenge?', 
B1 : 'Let\'s get started!',
B2 : 'You remain hungry the rest of the day.',
C1 : 'You open your fridge. \n \n Congratulations, you did go grocery shopping this week! \n \n In your fridge, there are some: Chicken, Tofu, and Shrimp. \n \n Pick your favorite ingredient:', 
C2 : 'Yum! Allez Cuisine!',
C3 : `The mind is like tofu. By itself, it has no taste. Everything depends on the flavor of the marinade it steeps in. \n - Zalman Schachter-Salomi.\n \n Ooh la la Chef ${name} , I hope you will be using many spices in your dish.`,
C4 : 'hmm...delicious...Allez Cuisine!',
C5 : 'Fork this, let\'s get take out!',
D1 : `Now let's keep things healthy and pick some veggies to add to your dish, Chef ${name}! \n \n You have : Bok choy, Spinach, Mushroom`,   
D2 : `Ahh yes, Bok Choy! A very Asian inspired choice Chef ${name}!`,
D3 : 'Spinach is packed full of nutrients so good job picking this veggie!',
D4 : 'Ahh, the loyal mushroom! A true child of the earth',
E1 : 'How about a filling carbohydrate to round out the meal? \n \n After scouring the remaining items in your fridge, you see: Spaghetti, Bread, Broth, and Rice',
E2 : `Excellent choice, Chef ${name}! Spaghetti is always tasty!`,
E3 : `Excellent choice, Chef ${name}! Who doesn't love bread?`,
E4 : `Excellent choice, Chef ${name}! Mystery broth will surely making for an interesting dish!`,
E5 : `Excellent choice, Chef ${name}! The key to any Asian inspired meal: rice! Hopefully it's not 6 days old.`,
E6 : 'You don\'t see that in your fridge. Pick again!',
F1 : 'We can\'t forget to season our food, let\'s pick a spice you have: Salt, Pepper, Cinnamon Toast Spice, and Chili', 
F2 : 'Great choice, we\'re on our way to a flavorful dish',
F3 : 'Questionable choice but let\'s continue',  
G1 : `Chef ${name}, I see that we are attempting to create a Pasta!`,
G2 : `Chef ${name}, I see that we are attempting to create a Sandwich!`,
G3 : `Chef ${name}, what are we stirring up over here? a Soup?!`,
G4 : `Chef ${name}, ooh, a rice stir-fry! Did you know that the ancient rice grain was cultivated 9000 years ago? `
  
}

beginGame();

// intro/begin game function
function beginGame() {
  if (confirm(messages.A)){
    alert(messages.B1);
    pickProtein();
  } else {
    alert (messages.B2); 
    return;
  }  
 };

// ingredients functions
// proteins
function pickProtein () {
  let answer = prompt(messages.C1);
  answer = answer.toLowerCase();
  if (answer == 'chicken') {
    playerInput.protein = answer;
    alert(messages.C2);
    pickVeggies();
  } else if (answer == 'tofu') {
    playerInput.protein = answer;
    alert(messages.C3);
    pickVeggies();
  } else if (answer == 'shrimp') {
    playerInput.protein = answer;
    alert(messages.C4);
    pickVeggies();
  } else { 
    alert(messages.C5);
    pickProtein();
  }
  // return;
} 

// vegetables 

function pickVeggies(){
    let answer = prompt(messages.D1);
    answer = answer.toLowerCase();
    if (answer == 'bok choy'){
        playerInput.veggie = answer;
        alert(messages.D2)
        pickCarbs();
        
    }
    else if (answer == 'spinach'){
        playerInput.veggie = answer;
        alert(messages.D3)
        pickCarbs();
    }
    else if (answer == 'mushroom'){
        playerInput.veggie = answer;
        alert (messages.D4)
        pickCarbs();
    } 
    else{
        alert ('I just got a text from your mom and she said: YOU MUST ADD A VEGGIE!')
        pickVeggies() 
    } 
    //return;
}

// carbs
function pickCarbs() {
  let answer = prompt(messages.E1);
  answer = answer.toLowerCase();
  if (answer == 'spaghetti') {
    playerInput.carb = answer;
    // checking to make sure the object is being populated correctly
    // console.log(playerInput);
    alert(messages.E2);
    pickSpices();
  }
  else if (answer == 'bread') {
    playerInput.carb = answer;
    // checking to make sure the object is being populated correctly
    // console.log(playerInput);
    alert(messages.E3);
    pickSpices();
  }
  else if (answer == 'broth') {
    playerInput.carb = answer;
    // console.log(playerInput);
    alert(messages.E4);
    pickSpices();
  }
  else if (answer == 'rice') {
    playerInput.carb = answer;
    alert(messages.E5);
    pickSpices();
  }
  else {
    // putting a recursive function here? - pickCarbs will continually call itself until the player inputs the appropriate answer as the base case
    alert(messages.E6);
    pickCarbs();
  }
  // return;
}


// spices
function pickSpices () {
let answer = prompt (messages.F1);
  answer = answer.toLowerCase(); 
  if (answer == 'salt') {
    playerInput.spice = answer; 
    alert(messages.F2)
    recipe();
  } 
  else if (answer == 'pepper'){
    playerInput.spice = answer; 
    alert(messages.F2);
    recipe();
  }
  else if (answer == 'chili'){
    playerInput.spice = answer; 
    alert (messages.F2);
    recipe();
  }
  else if (answer == 'cinnamon toast spice'){
    playerInput.spice = answer;
    alert (messages.F3);
    recipe();
  }
  else {
      alert ('You got arrested for making bland and unseasoned food!')
  pickSpices ();  
  }
  // return;
}

function recipe() { 
  const toArray = Object.values(playerInput)
  
  toArray.forEach(element => { 
  if (element.includes('cinnamon toast spice')) {
    alert ("AHHH!! Cinnamon Toast Spice?! Eww! What is this concoction?!")
    }
    
  else if (element.includes('spaghetti')) {
    alert(messages.G1);
    alert(`This pasta has some interesting ingredients - ${playerInput['protein']}, ${playerInput['veggie']}, ${playerInput['spice']}!`)
  }
    
  else if (element.includes('bread')){
    alert(messages.G2);
    alert('Life is like a sandwich, the more you add to it, the better it will be!');
    alert(`A sandwich that is made out of ${playerInput.protein}, ${playerInput.veggie}, ${playerInput.spice}. Ooohh, tastes suspicious...`)
  }
    
  else if (element.includes('broth')) {
    alert(messages.G3);
    alert(`Beethoven says that only the pure in heart can make a good soup. Hmm... let's see if you are pure in heart. I doubt it! This soup has ${playerInput.protein}, ${playerInput.veggie}, ${playerInput.spice}! All this does not sound too pure in heart!`)
  }
    
  else if (element.includes('rice')) {
    alert(messages.G4);
    alert(`This stir-fry includes ${playerInput.protein}, ${playerInput.veggie}, ${playerInput.spice}! Absolutely scrumptious!`)
  }
    
});
 endGame();
}


function endGame () {
  return alert("Bon Appetit!")
}