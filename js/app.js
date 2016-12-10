//Carrots to spend
var carrots = 0;
//Lifetime carrots earned
var noCarrots = 0;
//Number of bunnies you own
var bunnies = 0;
//Number of guns you own
var guns = 0;
//Number och carrots per click
var totalBunnies = 1;
//Lifetime clicks
var totalClicks = 0;
//DPS for guns
var gunPower = 0;

//GameTime Total
var totalTime = 0;

//On click increase number of carrots to spend
function carrotClicks(totalBunnies){
    totalBunnies = totalBunnies + bunnies + gunPower;                   //Sets power of clicks per second
    carrots = carrots + totalBunnies;                                   //Increments carrot to spend
    noCarrots = noCarrots + totalBunnies;                               //Total carrots earned during game
    document.getElementById("carrots").innerHTML = carrots;
    document.getElementById("totalCarrots").innerHTML = noCarrots;      //Print total carrots earned
    totalClicks += 1;
    document.getElementById("totalClicks").innerHTML = totalClicks;

};

//Counts time spent playing
function countTime() {
    totalTime += 1;
    document.getElementById("totalTime").innerHTML = totalTime;
};

//Buy 1 bunny and increment its total cost
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

//Buy 1 gun and increment its total cost
function buyGuns(){
	var gunCost = Math.floor(50 * Math.pow(1.52,guns));
	if(carrots >= gunCost){
		guns = guns + 1;
        gunPower = gunPower + 5;
		carrots = carrots - gunCost;
		document.getElementById('guns').innerHTML = guns;
		document.getElementById('carrots').innerHTML = carrots;
	};
	var nextGunCost = Math.floor(50 * Math.pow(1.52,guns));
	document.getElementById('gunCost').innerHTML = nextGunCost;
};

//Runs time spent loop each second
window.setInterval(function(){
	countTime();
}, 1000);

