var carrots = 0;
var noCarrots = 0;
var bunnies = 0;
var guns = 0;
var totalBunnies = 1;
var totalClicks = 0;
var totalCarrots = 0;

var totalTime = 0;


function carrotClicks(totalBunnies){
    totalBunnies = totalBunnies + bunnies;
    carrots = carrots + totalBunnies;
    noCarrots = noCarrots + totalBunnies;
    document.getElementById("carrots").innerHTML = carrots;
    document.getElementById("totalCarrots").innerHTML = noCarrots;
    totalClicks += 1;
    document.getElementById("totalClicks").innerHTML = totalClicks;

};

function countTime() {
    totalTime += 1;
    document.getElementById("totalTime").innerHTML = totalTime;
};

function buyBunnies(){
    var bunnyCost = Math.floor(10 * Math.pow(1.52,bunnies));     //works out the cost of this cursor
    if(carrots >= bunnyCost){                                   //checks that the player can afford the cursor
        bunnies = bunnies + 1;                                   //increases number of bunnies
    	carrots = carrots - bunnyCost;                          //removes the carrots spent
        document.getElementById('bunnies').innerHTML = bunnies;  //updates the number of bunnies for the user
        document.getElementById('carrots').innerHTML = carrots;  //updates the number of carrots for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.52,bunnies));       //works out the cost of the next cursor
    document.getElementById('bunnyCost').innerHTML = nextCost;  //updates the cursor cost for the user

};

function buyGuns(){
	var gunCost = Math.floor(500 * Math.pow(1.52,guns));
	if(carrots >= gunCost){
		guns = guns +1;
		carrots = carrots - gunCost;
		document.getElementById('guns').innerHTML = guns;
		document.getElementById('carrots').innerHTML = carrots;
	};
	var nextGunCost = Math.floor(500 * Math.pow(1.52,guns));
	document.getElementById('gunCost').innerHTML = nextGunCost;
};

window.setInterval(function(){
	countTime();
}, 1000);

