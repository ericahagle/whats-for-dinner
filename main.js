/* Data Model */
var sides = [
	"Miso Glazed Carrots",
	"Coleslaw",
	"Garden Salad",
	"Crispy Potatoes",
	"Sweet Potato Tots",
	"Coconut Rice",
	"Caesar Salad",
	"Shrimp Summer Rolls",
	"Garlic Butter Mushrooms",
	"Hush Puppies"
];
var mains = [
	"Spaghetti and Meatballs",
	"Pineapple Chicken",
	"Shakshuka",
	"Thai Yellow Curry",
	"Bibimbap",
	"Chicken Parmesan",
	"Butternut Squash Soup",
	"BBQ Chicken Burgers",
	"Ramen",
	"Empanadas",
	"Chicken Fried Rice",
	"Sheet Pan Fajitas",
	"Margarita Pizza"
];
var desserts = [
	"Apple Pie",
	"Lemon Meringue Pie",
	"Black Forest Cake",
	"Banana Bread",
	"Peach Cobbler",
	"Cheesecake",
	"Funfetti Cake",
	"Baklava",
	"Flan",
	"Macarons",
	"Macaroons",
	"Chocolate Cupcakes",
	"Pavlova",
	"Pumpkin Pie",
	"Key Lime Pie",
	"Tart Tatin",
	"Croissants",
	"Eclairs"
];
var randomSuggestion;


/* Query Selectors */
var sideSelector = document.querySelector("#side-selector");
var mainSelector = document.querySelector("#main-dish-selector");
var dessertSelector = document.querySelector("#dessert-selector");
var mealSelector = document.querySelector("#entire-meal-selector");
var letsCookButton = document.querySelector("#lets-cook-button");
var cookpotImage = document.querySelector("#cookpot");
var outputAnswer = document.querySelector("#answer");
var randomSuggestion = document.querySelector("#random-suggestion");


/* Event Listeners */
window.addEventListener("load", showDefaultImage);
sideSelector.addEventListener("click", getSide);
mainSelector.addEventListener("click", getMain);
dessertSelector.addEventListener("click", getDessert);
mealSelector.addEventListener("click", getMeal);
letsCookButton.addEventListener("click", swapContent);


/* Functions */
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showDefaultImage() {
	cookpotImage.classList.remove("hidden");
	outputAnswer.classList.add("hidden");
}

function getSide() {
	var sidesIndex = getRandomIndex(sides);
	var randomSide = sides[sidesIndex];
	randomSuggestion = `${randomSide}!`;
}

function getMain() {
	var mainsIndex = getRandomIndex(mains);
	var randomMain = mains[mainsIndex];
	randomSuggestion = `${randomMain}!`;
}

function getDessert() {
	var dessertsIndex = getRandomIndex(desserts);
	var randomDessert = desserts[dessertsIndex];
	randomSuggestion = `${randomDessert}!`;
}

function getMeal() {
	var sidesIndex = getRandomIndex(sides);
	var randomSide = sides[sidesIndex];
	var mainsIndex = getRandomIndex(mains);
	var randomMain = mains[mainsIndex];
	var dessertsIndex = getRandomIndex(desserts);
	var randomDessert = desserts[dessertsIndex];
	randomSuggestion = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`;
}

function swapContent() {
	cookpotImage.classList.add("hidden");
	outputAnswer.classList.remove("hidden");
	document.getElementById("random-suggestion").innerHTML = randomSuggestion;
}
