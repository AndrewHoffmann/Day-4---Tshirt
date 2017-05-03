// alert('test') // use in every js, makes sure no errors, will load when ok

// all HTML elements
// make 5 variables for 3 carts, subtotal, and total

var blueCart = document.getElementById('blueCart');
var pinkCart = document.getElementById('pinkCart');
var orangeCart = document.getElementById('orangeCart');
var subtotal = document.getElementById('subtotal');
var total = document.getElementById('total');


var isBlueInCart = false;
var isPinkInCart = false;
var isOrangeInCart = false;
var subtotaljs = 0;
var totaljs = subtotaljs * 1.065;
var dateAdded = new Date();


// 3/13/17 work and notes --- see Jake's 3/14/17 GitHub
// 1) 3 new objects for each shirt
// 2) empty array that will hold shirts
// 3) Use event listeners to push your teeshirt object into your array
// 4) Create a function to update your HTML with what is in your array

var htmlBox = document.getElementById('itemsInCart');

var subtotalBox = document.getElementById('subtotal');
var totalBox = document.getElementById('total');

// our 3 items that we have for sale.  Do not need these 3 as the cart addEventListeners click below are taking care of this

// var blueShirt = {
// 	name: 'Save my trees',
// 	color: "blue",
// 	price: 29,
// 	time: dateAdded,
// 	inCart:false,
// }

// var pinkShirt = {
// 	name: 'Nature Lover',
// 	color: "pink",
// 	price: 19,
// 	time: dateAdded,
// 	inCart:false,
// }

// var orangeShirt = {
// 	name: 'Forrest Walk',
// 	color: "orange",
// 	price: 39,
// 	time: dateAdded,
// 	inCart:false,
// }

// this is going to be our "Grocery Cart"
var whatsInMyCart = [];  

// anytime anything comes or goes from our we want to run this function
function updateCart(){
	var subtotal = 0;

	// empty string for now
	var html = "";

	// loop over every item that is in our cart and add to our subtotal.
	// (shirt) 
	whatsInMyCart.forEach(function(shirt){
		subtotal+=shirt.price;
		timeAdded = moment(shirt.time).fromNow();

		html+= `<div><h3>${shirt.name} (${shirt.color})<span> $${shirt.price}</span>, added ${timeAdded}</h3></div>`;
	});

	// put the subtotal into our subtotal box
	subtotalBox.innerHTML = subtotal;

	// calculate our total and store in a total variable
	var total = subtotal*1.065;

	//put the total into our total box
	totalBox.innerHTML = total*1.065;

	// Add the list of items into our box
	htmlBox.innerHTML = html;
}

// this is what happens when the blue add to the cart button is clicked
blueCart.addEventListener('click', function(){
	let shirt = new Shirt('Save My Trees',29,'Blue',Date.now())
	whatsInMyCart.push(shirt);
	 updateCart()
})

// this is what happens when the pink add to the cart button is clicked
pinkCart.addEventListener('click', function(){
	let shirt = new Shirt('Nature Lover',19,'Pink',Date.now())
	whatsInMyCart.push(shirt);
	 updateCart()
})

// this is what happens when the orange add to the cart button is clicked
orangeCart.addEventListener('click', function(){
	let shirt = new Shirt('Forrest Walk',39,'Orange',Date.now())
	whatsInMyCart.push(shirt);
	 updateCart()
})

// 
function Shirt(name, price, color, time){
	this.name = name;
	this.price = price;
	this.color = color;
	this.time = time;
}
