var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to pickedColor
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//change color of all squares'
	for (var i=0; i<squares.length; i++){
	//add initial colors to squares
		squares[i].style.background=colors[i];
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors"

});

colorDisplay.textContent = pickedColor;


for (var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.background=colors[i];

	//add click listeners
	squares[i].addEventListener("click", function(){

		//grab color of clicked square
		var clickedColor = this.style.background;

		//compare color with picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent="Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

function changeColors(color){
	//loop through all square
	for (var i = 0; i < squares.length ; i++) {
		//change each color to passed color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i=0; i<num ;i++){
		//get random color
		//push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}