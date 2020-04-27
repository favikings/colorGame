var numSquares = 6;
var pickedColor;
var colors;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square"); //selects all elemts with the class squares.
var resetColorButton = document.getElementById("resetColor");
var colorDisplay = document.getElementById("colorDisplay");//Select the span class
var messageDisplay = document.getElementById("message");
var easyButton = "Easy";
var hardButton = document.getElementById("hardButton");
var modeButtons = document.getElementsByClassName("mode");

init();

function init(){
    setUpModeButtons();
    
    matchColorToSquares();
    
    reset();
}

function setUpModeButtons(){
    for (var i = 0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            
           this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    
            reset();
        })
    }
}//End of SetUpModeButtons Function

function matchColorToSquares(){
    //Matching Random Colors with The Squares
    for (var i = 0; i < squares.length; i++){
        //add clickListeners to the squares
        squares[i].addEventListener("click", function(){
             //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //Compare
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
            resetColorButton.textContent = "Play Again?"
            // easyButton.style.color = pickedColor;
            // resetColorButton.style.color = pickedColor;
    
            
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            
        }
    
        });
    }//forloop for matchin the colors to the boxes

}//End of matchColorToSquares Function

function reset(){
     //generate all new colors
     colors = generateRandomColor(numSquares);
     //pick a new random color from array
     pickedColor = pickColor();
     //change colorDisplay  to match Picked color
     colorDisplay.textContent = pickedColor;
     //change colors of sqaures
     for (var i = 0; i<squares.length; i++){
         if(colors[i]){
             squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
         }else{
            squares[i].style.display = "none";
         }
         
     }
     h1.style.backgroundColor = "orangered";
     messageDisplay.textContent = "";
     resetColorButton.textContent = "New Colors";
 
}//End of Reset Function


//Reset Button Click
resetColorButton.addEventListener("click", function(){
    reset();
})



function changeColors(color){
    //loop through the qqaures
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}//Function too change Squares backgroundColors if Correct

function pickColor(){
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function generateRandomColor(num){
    //make the Array
    var arr = [];
    //Repeat num times
    for(var i  = 0; i < num; i++){
        arr.push(randomColor());
    }
    //get random color and push into array
    //return
    return arr;
}

function randomColor(){
    //pick a green color from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue color from 0-255
    var b = Math.floor(Math.random() * 256);
    //picked a red color from 0-255
    var r = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}

