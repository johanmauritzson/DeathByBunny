//Carrots to spend
var carrots = 2000;
//Lifetime carrots earned
var noCarrots = 0;
//Number of civilians you own
var bunnies = 0;
//Number of Privates you own
var private = 0;
//Number of Corporals you own
var corporal = 0;
//Number of Sergeants you own
var sergeant = 0;
//Number of Master Sergeants you own
var masterSergeant = 0;
//Number of First Lieutenants you own
var firstLieutenant = 0;
//Number of Captains you own
var captain = 0;
//Number of Majors you own
var major = 0;
//Number of Colonels you own
var colonel = 0;
//Number of Major Generals you own
var majorGeneral = 0;
//Number of Generals you own
var general = 0;


//Number och carrots per click
var totalBunnies = 1;
//Lifetime clicks
var totalClicks = 0;
//DPS for Privates
var privatePower = 0;
//DPS for Corporals
var corporalPower = 0;
//DPS for Sergeants
var sergeantPower = 0;
//DPS for Master Sergeant
var masterSergeantPower = 0;
//DPS for First Lieutenants
var firstLieutenantPower = 0;
//DPS for Captains
var captainPower = 0;
//DPS for Majors
var majorPower = 0;
//DPS for Colonels
var colonelPower = 0;
//DPS for Major Generals
var majorGeneralPower = 0;
//DPS for Generals
var generalPower = 0;

//GameTime Total
var totalTime = 0;
//Counts how many total army bunnies you have
var totalArmy = 0;
var totalDps = 0;

var hp = 10;
var defeated = 0;
var overallDamage = 0;
var lvlMulti = 1;

//On click increase number of carrots to spend
function carrotClicks(totalBunnies){
    totalBunnies = totalBunnies + bunnies;                              //Sets power of clicks per second
    totalBunnies = totalBunnies * dmgRatio;
    totalArmy = bunnies + private;
    carrots = carrots + totalBunnies;                                   //Increments carrot to spend
    noCarrots = noCarrots + totalBunnies;                               //Total carrots earned during game
    document.getElementById("carrots").innerHTML = carrots;
    document.getElementById("totalCarrots").innerHTML = noCarrots;      //Print total carrots earned
    totalClicks += 1;
    document.getElementById("totalClicks").innerHTML = totalClicks;
};

function dpsCounter(totalDps){
    totalDps = totalDps + privatePower+corporalPower+sergeantPower+masterSergeantPower+firstLieutenantPower+captainPower+majorPower+colonelPower+majorGeneralPower+generalPower;
    totalDps = totalDps * dmgRatio;
    carrots = carrots + totalDps;                                   //Increments carrot to spend
    noCarrots = noCarrots + totalDps;                               //Total carrots earned during game
    document.getElementById("carrots").innerHTML = carrots;
    document.getElementById("totalCarrots").innerHTML = noCarrots;      //Print total carrots earned
    totalClicks += 1;
    document.getElementById("totalClicks").innerHTML = totalClicks;

    console.log("current hp: " + hp);
    console.log("Current lvl: " + lvlMulti);

    hp = hp - totalDps;
    if (hp<=0) {
        damage();
    }

};

//Counts time spent playing
function countTime() {
    totalTime += 1;
    document.getElementById("totalTime").innerHTML = totalTime;
};

function damage(){
    defeated += 1;
    console.log("1 död")
    
    console.log("Antal besegrade: " + defeated);
    if (defeated == 5) {
        lvlMulti += 1;
        defeated = 0;
        hp = 10 * lvlMulti * defeated;
    }else{
        hp = 10 * lvlMulti * defeated;
    }
   
}

function levelProgress(){
    


    
}

//Runs time spent loop each second
window.setInterval(function(){
    countTime();
    if(private >= 1){
        dpsCounter(totalDps);
    };
    
}, 1000);

//Buy 1 Civilian and increment its total cost
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

//Buy 1 Private and increment its total cost
function buyPrivate(){
	var privateCost = Math.floor(2000 * Math.pow(1.52,private));
	if(carrots >= privateCost){
		private = private + 1;
        privatePower = privatePower + 5;
		carrots = carrots - privateCost;
		document.getElementById('private').innerHTML = private;
		document.getElementById('carrots').innerHTML = carrots;
	};
	var nextprivateCost = Math.floor(2000 * Math.pow(1.52,private));
	document.getElementById('privateCost').innerHTML = nextprivateCost;
};

//Buy 1 Corporal and increment its total cost
function buyCorporal(){
    var corporalCost = Math.floor(35000 * Math.pow(1.52,corporal));
    if(carrots >= corporalCost){
        corporal = corporal + 1;
        corporalPower = corporalPower + 15;
        carrots = carrots - corporalCost;
        document.getElementById('corporal').innerHTML = corporal;
        document.getElementById('carrots').innerHTML = carrots;
    };
    var nextcorporalCost = Math.floor(35000 * Math.pow(1.52,corporal));
    document.getElementById('corporalCost').innerHTML = nextcorporalCost;
};
//Buy 1 Sergeant and increment its total cost
function buySergeant(){
    var sergeantCost = Math.floor(100000 * Math.pow(1.52,sergeant));
    if(carrots >= sergeantCost){
        sergeant = sergeant + 1;
        sergeantPower = sergeantPower + 25;
        carrots = carrots - sergeantCost;
        document.getElementById('sergeant').innerHTML = sergeant;
        document.getElementById('carrots').innerHTML = carrots;
    };
    var nextsergeantCost = Math.floor(100000 * Math.pow(1.52,sergeant));
    document.getElementById('sergeantCost').innerHTML = nextsergeantCost;
};
//Buy 1 Master Sergeant and increment its total cost
function buyMasterSergeant(){
    var masterSergeantCost = Math.floor(300000 * Math.pow(1.52,masterSergeant));
    if(carrots >= masterSergeantCost){
        masterSergeant = masterSergeant + 1;
        masterSergeantPower = masterSergeantPower + 40;
        carrots = carrots - masterSergeantCost;
        document.getElementById('masterSergeant').innerHTML = masterSergeant;
        document.getElementById('carrots').innerHTML = carrots;
    };
    var nextmasterSergeantCost = Math.floor(300000 * Math.pow(1.52,masterSergeant));
    document.getElementById('masterSergeantCost').innerHTML = nextmasterSergeantCost;
};
//Buy 1 First Lieutenant and increment its total cost
function buyFirstLieutenant(){
    var firstLieutenantCost = Math.floor(800000 * Math.pow(1.52,firstLieutenant));
    if(carrots >= firstLieutenantCost){
        firstLieutenant = firstLieutenant + 1;
        firstLieutenantPower = firstLieutenantPower + 60;
        carrots = carrots - firstLieutenantCost;
        document.getElementById('firstLieutenant').innerHTML = firstLieutenant;
        document.getElementById('carrots').innerHTML = carrots;
    };
    var nextfirstLieutenantCost = Math.floor(800000 * Math.pow(1.52,firstLieutenant));
    document.getElementById('firstLieutenantCost').innerHTML = nextfirstLieutenantCost;
};
//Buy 1 Captain and increment its total cost
function buyCaptain(){
    var captainCost = Math.floor(1500000 * Math.pow(1.52,captain));
    if(carrots >= captainCost){
        captain = captain + 1;
        captainPower = captainPower + 100;
        carrots = carrots - captainCost;
        document.getElementById('captain').innerHTML = captain;
        document.getElementById('carrots').innerHTML = carrots;
    };
    var nextcaptainCost = Math.floor(1500000 * Math.pow(1.52,captain));
    document.getElementById('captainCost').innerHTML = nextcaptainCost;
};
//Buy 1 Major and increment its total cost
function buyMajor(){
    var majorCost = Math.floor(5000000 * Math.pow(1.52,major));
    if(carrots >= majorCost){
        major = major + 1;
        majorPower = majorPower + 150;
        carrots = carrots - majorCost;
        document.getElementById('major').innerHTML = major;
        document.getElementById('carrots').innerHTML = carrots;
    };
    var nextmajorCost = Math.floor(5000000 * Math.pow(1.52,major));
    document.getElementById('majorCost').innerHTML = nextmajorCost;
};
//Buy 1 Colonel and increment its total cost
function buyColonel(){
    var colonelCost = Math.floor(10000000 * Math.pow(1.52,colonel));
    if(carrots >= colonelCost){
        colonel = colonel + 1;
        colonelPower = colonelPower + 225;
        carrots = carrots - colonelCost;
        document.getElementById('colonel').innerHTML = colonel;
        document.getElementById('carrots').innerHTML = carrots;
    };
    var nextcolonelCost = Math.floor(10000000 * Math.pow(1.52,colonel));
    document.getElementById('colonelCost').innerHTML = nextcolonelCost;
};
//Buy 1 Major General and increment its total cost
function buyMajorGeneral(){
    var majorGeneralCost = Math.floor(20000000 * Math.pow(1.52,majorGeneral));
    if(carrots >= majorGeneralCost){
        majorGeneral = majorGeneral + 300;
        majorGeneralPower = majorGeneralPower + 5;
        carrots = carrots - majorGeneralCost;
        document.getElementById('majorGeneral').innerHTML = majorGeneral;
        document.getElementById('carrots').innerHTML = carrots;
    };
    var nextmajorGeneralCost = Math.floor(20000000 * Math.pow(1.52,majorGeneral));
    document.getElementById('majorGeneralCost').innerHTML = nextmajorGeneralCost;
};
//Buy 1 General and increment its total cost
function buyGeneral(){
    var generalCost = Math.floor(50000000 * Math.pow(1.52,general));
    if(carrots >= generalCost){
        general = general + 1;
        generalPower = generalPower + 500;
        carrots = carrots - generalCost;
        document.getElementById('general').innerHTML = general;
        document.getElementById('carrots').innerHTML = carrots;
    };
    var nextgeneralCost = Math.floor(50000000 * Math.pow(1.52,general));
    document.getElementById('generalCost').innerHTML = nextgeneralCost;
};

//Reduce the clicking time by 25%
var quarterTime = 0.75;
var dpsTimer = 4000;
var timerUpgrades = 0;
//Double your total damage
var dmgBoost = 0;
var dmgRatio = 1;
var dmgUpgrades = 0;
//Add 10 seconds to boss timer
var timerBoost = 10000;


function doubleDamage(){
    var dmgBoostCost = Math.floor(50000 * Math.pow(10,dmgUpgrades));
    if(carrots >= dmgBoostCost){
        dmgUpgrades = dmgUpgrades + 1;
        dmgRatio = dmgRatio * 2;
        carrots = carrots - dmgBoostCost;
        document.getElementById("dmgUpgrades").innerHTML = dmgUpgrades;
        document.getElementById("carrots").innerHTML = carrots;
    };
    var nextDmgCost = Math.floor(50000 * Math.pow(10, dmgUpgrades));
    document.getElementById("dmgBoostCost").innerHTML = nextDmgCost;
};



