
var carrots = 0;

function carrotClick(number){
    carrots = carrots + number;
    document.getElementById("carrots").innerHTML = carrots;
};

var upgrades = 0;

function buyUpgrade(){
    var upgradeCost = Math.floor(10 * Math.pow(1.1,upgrades));     //works out the cost of this cursor
    if(carrots >= upgradeCost){                                   //checks that the player can afford the cursor
        upgrades = upgrades + 1;                                   //increases number of cursors
    	carrots = carrots - upgradeCost;                          //removes the cookies spent
        document.getElementById('upgrades').innerHTML = upgrades;  //updates the number of cursors for the user
        document.getElementById('carrots').innerHTML = carrots;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,upgrades));       //works out the cost of the next cursor
    document.getElementById('upgradeCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	carrotClick(upgrades);
	
}, 1000);

var guns = 0;

function buyGun(){
	var gunCost = Math.floor(100 * Math.pow(1.1,guns)); 
	if carrots >= gunCost

}