
/* declare variables */
var numSelected = null; 
var TileSelected = null; 
var selectedlevel = null;
var errors = 0;	
var Tilecounter = 0;
var level1TotalTile = 46;
var level2TotalTile = 57;
var level3TotleTile = 54;
/* 
1: beginner level
2: medium level
3: hard level
*/
var level = 1;

/* level1 */
var board1 = [
	"--74916-5",
	"2---6-3-9",
	"-----7-1-",
	"-586----4",
	"--3----9-",
	"--62--187",
	"9-4-7---2",
	"67-83----",
	"81--45---",       //Mathdoku
]

var solution1 = [
	"387491625",
	"241568379",
	"569327418",
	"758619234",
	"123784596",
	"496253187",
	"934176852",
	"675832941",
	"812945763",
]

/* level 2 */
var board2 = [
	"-----9---",
	"8---2-6-4",
	"-------7-",
	"-5--8---3",
	"34--7----",
	"2--6--98-",
	"7---485-2",
	"---------",
	"--2----69",
]
var solution2 = [
	"627419358",
	"813527694",
	"594863271",
	"956182743",
	"348975126",
	"271634985",
	"769348512",
	"185296437",
	"432751869",
]

/* level 3 */
var board3 = [
	"79-------",
	"---9-8-1-",
	"---72-5--",
	"---4-----",
	"----1-9-2",
	"-----5483",
	"--3-7--51",
	"-598-4---",
	"--71----4",
]
var solution3 = [
	"792541638",
	"345968217",
	"618723549",
	"936482175",
	"584317962",
	"271695483",
	"463279851",
	"159834726",
	"827156394",
]

/* Timer function */
var timer; 
var ele = document.getElementById('timer');
/* Start Timer */
(function (){
	var sec = 0;
	timer = setInterval(()=>{
		min = Math.floor(sec / 60);
		ele.innerHTML = min + ':' + (sec % 60);
		sec ++;
	}, 1000) 
})()

/* Stop Timer */
function stopTimer() {
	clearTimeout(timer);
}

/* start the game */
window.onload = function() {    
	setGame();
}

/* run the game */
function setGame() {
	//Display images side by side
	for (let i= 1; i<=3; i++) {
		let img = document.createElement("img");
		img.src = "level_"+i+".png";
		img.alt = i;
		img.classList.add("img-style");
		document.getElementById("image").appendChild(img);	
		img.addEventListener("click", levelselected); // when click image to get game level
	}
	//Display the modal window
	var modal = document.getElementById("myModal");
	var btnhelp = document.getElementById("myBtn");
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btnhelp.onclick = function() {
  		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
  		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	//console.log("level chosen", selectedlevel);
	DisplayDigitnumber();
	DisplayTileboard();
}

// Display 1-9 on 3x3 grid
function DisplayDigitnumber() {
	// Create 3x3 numbers
	for (let i = 1; i <=9; i++) {
		let number = document.createElement("div");  // Create <div></div> tag element
		number.id = i;
		number.innerText = i;
		number.classList.add("number"); 
		document.getElementById("digits").appendChild(number);  
		number.addEventListener("click", selectNumber);  
    }
}

function DisplayMessage() {
	var message = document.createElement("div");
	message.innerText = "Congratulation!";
	document.getElementById("Prize").appendChild(message); 
}

function Displayfirework(){
	var effect = document.createElement("div");
	firework.classList.add("firework");
	document.getElementById("firework").appendChild(effect);
	effect.innerText = firework.start();
}


/* select level */
function levelselected() {
	//console.log("levelSelected: ", selectedlevel);
	this.classList.add("img-rounded-border");  //change style to image when toggling
	selectedlevel = this;
	console.log("selectedlevel: ", selectedlevel);  //for debugging to check which level is selected
	if (selectedlevel.alt == 1) {   // beginner level
		Tilecounter = 0;           // initialise the values when changing the level
		errors = 0;				  // error start at 0	
		level = selectedlevel.alt;
		console.log("image level: ", level);
		ClearDisplaytileboard();
		DisplayTileboard();
	}
	else if(selectedlevel.alt == 2) {  //medium level
		Tilecounter = 0;			 
		errors = 0;
		level = selectedlevel.alt;
		console.log("image level: ", selectedlevel.alt);
		ClearDisplaytileboard();
		DisplayTileboard();
	}
	else {	//hard level
		Tilecounter = 0
		errors = 0;
		level = selectedlevel.alt;
		console.log("image level: ", selectedlevel.alt);
		ClearDisplaytileboard();
		DisplayTileboard();
	}
}

// Clear Displaytileboard while selecting level
function ClearDisplaytileboard() {
	var div = document.getElementById("board");
	while(div.firstChild){
		div.removeChild(div.firstChild);
	}
}

// Display 9x9 boards
function DisplayTileboard() {
	//Board 9x9 
	for (let r = 0; r < 9; r++) {
		for(let c=0; c < 9; c++) {
			let tile = document.createElement("div");
			tile.id = r.toString() + "-" + c.toString(); 
			
			console.log("level", level);
			if (level == 1) {   // check beginner level
				if (board1[r][c] != "-") {
					tile.innerText = board1[r][c];  //put array of board1 into tile
					tile.classList.add("tile-start");
				}
			}	
			else if (level == 2) {  // check medium level
				if (board2[r][c] != "-") {
					tile.innerText = board2[r][c];  //put array of board2 into tile
					tile.classList.add("tile-start");
				}
			}	
			else if (level == 3) {  // check hard level
				if (board3[r][c] != "-") {
					tile.innerText = board3[r][c];  //put array of board2 into tile
					tile.classList.add("tile-start");
				}
			}
				
			if (r ==2 || r==5) { 
				tile.classList.add("horizontal-line");
			}
			if (c ==2 || c==5) {
				tile.classList.add("vertical-line");
			}
			tile.classList.add("tile");
			document.getElementById("board").append(tile);
			tile.addEventListener("click", selectTile);   //click the tile to call selectTile function
		}
	}
}

/* select Number */
function selectNumber(){
	console.log("numSelected", numSelected); 
	if (numSelected != null) {
		numSelected.classList.remove("number-selected");      //remove number-selected style 
	} 																	
	numSelected = this;
	console.log("numSelected", numSelected);       //debug numSelected
	numSelected.classList.add("number-selected")   //Add number-selected style to the selected number
}

/* select Tile */
function selectTile() { 
	if (numSelected) {
		if(this.innerText != "") {   //if number exists inside the tile, it skips
			return;    
		}
		this.innerText = numSelected.id;   
		
		// Get the coordinate value from the tile      								
		let coords = this.id.split("-");  
		let r = parseInt(coords[0]);
		let c = parseInt(coords[1]);
		
		if (level == 1) {	
			if (solution1[r][c] == numSelected.id){
				Tilecounter += 1; //Count how many tiles have entered 

				this.innerText = numSelected.id;
				document.getElementById("messages").innerText = "Correct";
				if (level == 1) {
					if (Tilecounter == level1TotalTile) {
						DisplayMessage();    // Display Congratulation! 
						stopTimer();
					}
				} 
				else if (level == 2){
					if (Tilecounter == level2TotalTile) {
						DisplayMessage();    // Display Congratulation!
						stopTimer();
					}
				}
				else {
					if (Tilecounter == level3TotalTile) {
						DisplayMessage();    // Display Congratulation! 
						stopTimer();
					}
				}
			}
			else {
				errors += 1;   //if occurs in errors error count increment by 1
				if (errors == 1) {
					document.getElementById("messages").innerText = errors + " error in wrong position";
				} else {
					document.getElementById("messages").innerText = errors + " errors in wrong position";
				}
				this.innerText = "";
				this.classList.add("change-tile-color");
			}	
		}
		else if (level == 2) {	
			if (solution2[r][c] == numSelected.id){
				//count += 1;
				this.innerText = numSelected.id;
				document.getElementById("messages").innerText = "Correct";
			}
			else {
				errors += 1;   //if occurs in errors error count increment by 1
				if (errors == 1) {
					document.getElementById("messages").innerText = errors + " error in wrong position";
				} else {
					document.getElementById("messages").innerText = errors + " errors in wrong position";
				}
				this.innerText = "";
				this.classList.add("change-tile-color");
			}	
		}
		else if (level == 3) {	
			if (solution3[r][c] == numSelected.id){
				//count += 1;
				this.innerText = numSelected.id;
				document.getElementById("messages").innerText = "Correct";
			}
			else {
				errors += 1;   //if occurs in errors error count increment by 1
				if (errors == 1) {
					document.getElementById("messages").innerText = errors + " error in wrong position";
				} else {
					document.getElementById("messages").innerText = errors + " errors in wrong position";
				}
				this.innerText = "";
				this.classList.add("change-tile-color");
			}
		}
	}
}

//Digits 1 to 9 //look at https://www.youtube.com/watch?v=S4uRtTb8U-U&t=489s

