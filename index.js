var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://elimination-e4a4e.firebaseio.com"
});


// Get a database reference to our posts
var db = admin.database();
var refholz = db.ref("buildings/holz");



//buildings reward

var rewardHolz = 5;
var rewardRathaus = 20;
var rewardGold = 75;
var rewardPlatin = 250;
var rewardDiamant = 1000;


setInterval(function(){

	var ctr = 0;

//reward Holz
refholz.once("value", function(snapshot) {
  console.log("Snapshot holz: " +snapshot.val());


  snapshot.forEach(function(element) {


  	var ref1 = db.ref("users/" + element.key + "/extraCoins");
  	ref1.once("value", function(snapshot1){
  		var oldExtraCoins = snapshot1.val();
  		if(oldExtraCoins != null){
  			var newExtraCoins = parseInt(oldExtraCoins) + rewardHolz;
  			console.log("holzcoins: " + newExtraCoins);
  		
  		var refUpdate = db.ref("users/" + element.key);
  		refUpdate.update({
  			"extraCoins": newExtraCoins
  		}, function(error){

  			if(error){

  			}else{
  			
  				ctr++;	
  			if(ctr === snapshot.numChildren()){
  			console.log("foreach Holz done");
  			funcRewardRathaus();

		  	}

  			}

  		})

  	}else{

  		ctr++;
  		if(ctr === snapshot.numChildren()){
  		console.log("foreach Holz done");
  		funcRewardRathaus();
  	}


  	}

  	})






  }

  	)

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


//reward functions

//reward Rathaus
function funcRewardRathaus(){
var ctr1 = 0;
var refRathaus = db.ref("buildings/Rathaus") 

refRathaus.once("value", function(snapshotR) {

  snapshotR.forEach(function(elementR) {


  	var ref1R = db.ref("users/" + elementR.key + "/extraCoins")
  	ref1R.once("value", function(snapshot1R){	
  		var oldExtraCoinsR = snapshot1R.val();
  		if(oldExtraCoinsR != null){
  			var newExtraCoinsR = parseInt(oldExtraCoinsR) + rewardRathaus;
  			console.log("Rathauscoins: " + newExtraCoinsR);
  		
  		var refUpdateR = db.ref("users/" + elementR.key);
  		refUpdateR.update({
  			"extraCoins": newExtraCoinsR
  		}, function(error){

  			if(error){

  			}else{
  			
  			ctr1++;	
  			if(ctr1 === snapshotR.numChildren()){
  			console.log("foreach Rathaus done");
  			funcRewardGold();

		  	}

  			}


  		})

  	}else{

  		ctr1++;
  		if(ctr1 === snapshotR.numChildren()){
  		console.log("foreach Rathaus done");
  		funcRewardGold();
  	}



  	}

  	})

  }

  	)

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}
//Ende reward Rathaus


//reward Gold

function funcRewardGold(){
var ctr1 = 0;
var refGold = db.ref("buildings/gold");

refGold.once("value", function(snapshotR) {

  snapshotR.forEach(function(elementR) {

  	var ref1R = db.ref("users/" + elementR.key + "/extraCoins")
  	ref1R.once("value", function(snapshot1R){
  		var oldExtraCoinsR = snapshot1R.val();
  		if(oldExtraCoinsR != null){
  			var newExtraCoinsR = parseInt(oldExtraCoinsR) + rewardGold;
  			console.log("GoldCoins: " + newExtraCoinsR);
  		
  		var refUpdateR = db.ref("users/" + elementR.key);
  		refUpdateR.update({
  			"extraCoins": newExtraCoinsR
  		}, function(error){

  			if(error){

  			}else{
  			
  			ctr1++;	
  			if(ctr1 === snapshotR.numChildren()){
  			console.log("foreach Gold done");
  			funcRewardPlatin();

		  	}

  			}


  		})

  	}else{

  		ctr1++;
  		if(ctr1 === snapshotR.numChildren()){
  		console.log("foreach Gold done");
  		funcRewardPlatin();
  	}



  	}

  	})

  }

  	)

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}

//ende reward Gold


//Reward platin

function funcRewardPlatin(){
var ctr1 = 0;
var refPlatin = db.ref("buildings/platin"); 

refPlatin.once("value", function(snapshotR) {

  snapshotR.forEach(function(elementR) {


  	var ref1R = db.ref("users/" + elementR.key + "/extraCoins")
  	ref1R.once("value", function(snapshot1R){
  		var oldExtraCoinsR = snapshot1R.val();
  		if(oldExtraCoinsR != null){
  			var newExtraCoinsR = parseInt(oldExtraCoinsR) + rewardPlatin;
  			console.log("PlatinCoins: " + newExtraCoinsR);
  		
  		var refUpdateR = db.ref("users/" + elementR.key);
  		refUpdateR.update({
  			"extraCoins": newExtraCoinsR
  		}, function(error){

  			if(error){

  			}else{
  			
  			ctr1++;	
  			if(ctr1 === snapshotR.numChildren()){
  			console.log("foreach Platin done");
  			funcRewardDiamant();

		  	}

  			}


  		})

  	}else{

  		ctr1++;
  		if(ctr1 === snapshotR.numChildren()){
  		console.log("foreach Platin done");
  		funcRewardDiamant();
  	}



  	}

  	})

  }

  	)

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}
//Ende reward Platin

//rewardDiamant

function funcRewardDiamant(){
var ctr1 = 0;
var refDiamant = db.ref("buildings/diamant") 

refDiamant.once("value", function(snapshotR) {

  snapshotR.forEach(function(elementR) {

  	var ref1R = db.ref("users/" + elementR.key + "/extraCoins");
  	ref1R.once("value", function(snapshot1R){
  		var oldExtraCoinsR = snapshot1R.val();
  		if(oldExtraCoinsR != null){
  			var newExtraCoinsR = parseInt(oldExtraCoinsR) + rewardDiamant;
  			console.log("DiamantCoins: " + newExtraCoinsR);
  		
  		var refUpdateR = db.ref("users/" + elementR.key);
  		refUpdateR.update({
  			"extraCoins": newExtraCoinsR
  		}, function(error){

  			if(error){

  			}else{
  			
  			ctr1++;	
  			if(ctr1 === snapshotR.numChildren()){
  			console.log("foreach Diamant done");
  			//funcRewardGold();

		  	}

  			}


  		})

  	}else{

  		ctr1++;
  		if(ctr1 === snapshotR.numChildren()){
  		console.log("foreach Diamant done");
  		//funcRewardGold();
  	}



  	}

  	})

  }

  	)

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}

//Ende reward Diamant




//ende reward functions







}, 60000);
//Ende reward buildings


//start Roulette

var currentRound;
var randNumber1;
var secondNumber;
var thirdNumber;

setInterval(function(){

randNumber1 = Math.floor(Math.random() * 14) + 0;

var refRundenData = db.ref("roulette/roundData");

refRundenData.once("value", function(snapshot) {

	currentRound = snapshot.child("roundNumber").val();
	secondNumber = snapshot.child("curNumber").val();
	thirdNumber = snapshot.child("lastNumber").val();


	//Anfang reward bets

	//reward red
	if(randNumber1 < 8 && randNumber1 > 0){

		ctr1 = 0;

		var refRed = db.ref("roulette/bets/" + currentRound + "/red"); 
		refRed.once("value", function(snapshotRed) {

  		snapshotRed.forEach(function(element) {

  			var belohnung = element.val() * 2;

  			var refUser = db.ref("users/" + element.key + "/coins")
  			refUser.once("value", function(snapshotUserCoins){

  			if(snapshotUserCoins.val() != null){

  			var newCoins = parseInt(snapshotUserCoins.val()) + belohnung;
  			console.log("newcoins: " + newCoins);

  			var refUpdateUser = db.ref("users/" + element.key);
  			refUpdateUser.update({
  			"coins": newCoins
  			}, function(error){

  			if(error){
  				console.log("update user failed" + error);
  			}else{

  			ctr1++;	
  			if(ctr1 === snapshotRed.numChildren()){
  			console.log("foreach bet reward red done");
  			updateRoundData();

		  	}

  			}


  		})
  		}else{

  			ctr1++;	
  			if(ctr1 === snapshotRed.numChildren()){
  			console.log("foreach bet reward red done");
  			updateRoundData();
  		}


  		}

});

  			

		}

  		)

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});




	}
	//Ende reward Red


	//Anfang reward Green

	if(randNumber1 == 0){

		ctr1 = 0;

		var refGreen = db.ref("roulette/bets/" + currentRound + "/green"); 
		refGreen.once("value", function(snapshotGreen) {

  		snapshotGreen.forEach(function(element) {

  			var belohnung = element.val() * 14;

  			var refUser = db.ref("users/" + element.key + "/coins")
  			refUser.once("value", function(snapshotUserCoins){

  			if(snapshotUserCoins.val() != null){

  			var newCoins = parseInt(snapshotUserCoins.val()) + belohnung;
  			console.log("newcoins: " + newCoins);

  			var refUpdateUser = db.ref("users/" + element.key);
  			refUpdateUser.update({
  			"coins": newCoins
  			}, function(error){

  			if(error){
  				console.log("update user failed" + error);
  			}else{

  			ctr1++;	
  			if(ctr1 === snapshotGreen.numChildren()){
  			console.log("foreach bet reward green done");
  			updateRoundData();

		  	}

  			}


  		})
  		}else{

  			ctr1++;	
  			if(ctr1 === snapshotGreen.numChildren()){
  			console.log("foreach bet reward green done");
  			updateRoundData();
  		}


  		}

});

  			

		}

  		)

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});




	}


	//Ende reward Green


	//Anfang reward Black
	if(randNumber1 > 7){

		ctr1 = 0;

		var refBlack = db.ref("roulette/bets/" + currentRound + "/black"); 
		refBlack.once("value", function(snapshotBlack) {

  		snapshotBlack.forEach(function(element) {

  			var belohnung = element.val() * 2;

  			var refUser = db.ref("users/" + element.key + "/coins")
  			refUser.once("value", function(snapshotUserCoins){

  			if(snapshotUserCoins.val() != null){

  			var newCoins = parseInt(snapshotUserCoins.val()) + belohnung;
  			console.log("newcoins: " + newCoins);

  			var refUpdateUser = db.ref("users/" + element.key);
  			refUpdateUser.update({
  			"coins": newCoins
  			}, function(error){

  			if(error){
  				console.log("update user failed" + error);
  			}else{

  			ctr1++;	
  			if(ctr1 === snapshotBlack.numChildren()){
  			console.log("foreach bet reward black done");
  			updateRoundData();

		  	}

  			}


  		})
  		}else{

  			ctr1++;	
  			if(ctr1 === snapshotBlack.numChildren()){
  			console.log("foreach bet reward black done");
  			updateRoundData();
  		}


  		}

});

  			

		}

  		)

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});




	}
	//Ende reward Black


	//Ende reward bets


	



	}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


}, 15000);


function updateRoundData(){
	currentRound++;

	console.log("new Round " + currentRound + " : " + randNumber1);

	var refBettingSetUp = db.ref("roulette/bets/" + currentRound);

	refBettingSetUp.set({
  red: {
    uid: "1"
  },
  green: {
    uid: "1"
  },
  black:{
  	uid: "1"
  }
});

	var genDegree = degreeFromNumberANEW(randNumber1);

	var now = new Date().getTime() / 1000;

	var refUpdateRoundData = db.ref("roulette/roundData");
  		refUpdateRoundData.update({
  			"timestamp": now,
  			"roundNumber": currentRound,
  			"curNumber": randNumber1,
  			"lastNumber": secondNumber,
  			"thirdNumber": thirdNumber,
  			"degree": genDegree
  		}, function(error){

  			if(error){

  			}else{
  			

  			}


  		});

}//ende update Round data


function degreeFromNumberANEW(number2){


var curDegree = 0;
var minD = 0;
var maxD = 0;

switch(number2){

        case 0:

         minD = -235; 
         maxD = -265;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

        console.log("New number: 0");

        break;

          case 1:

         minD = -502;
         maxD = -532;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 1");

        break;

          case 2:

         minD = -569;
         maxD = -599;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 2");

        break;

          case 3:

         minD = -635;
         maxD = -665;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 3");

        break;

          case 4:

         minD = -702;
         maxD = -732;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 4");

        break;

          case 5:

         minD = -302;
         maxD = -332;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 5");

        break;

          case 6:

         minD = -368;
         maxD = -398;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 6");

        break;

          case 7:

         minD = -435;
         maxD = -465;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 7");

        break;

          case 8:

         minD = -468;
         maxD = -498;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 8");

        break;

          case 9:

         minD = -402;
         maxD = -432;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 9");

        break;

          case 10:

         minD = -336;
         maxD = -365;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 10");

        break;

          case 11:

         minD = -269;
         maxD = -297;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 11");

        break;

          case 12:

         minD = -668;
         maxD = -698;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 12");

        break;

          case 13:

         minD = -602;
         maxD = -632;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 13");

        break;

          case 14:

         minD = -535;
         maxD = -565;

        curDegree = Math.floor(Math.random()* (maxD - minD +1)) + minD;

         console.log("New number: 14");

        break;

      }


  return curDegree;


}


//check battle Anfang

setInterval(function(){

console.log("checking battles");

var refBattleData = db.ref("/battle");

refBattleData.once("value", function(snapshot) {

var now = new Date().getTime() / 1000;

snapshot.forEach(function(element) {

	var player1 = element.child("player1ID").val();
	var player2 = element.child("player2ID").val();

	//set battle ID

	var battleIDplaced = element.child("battleIDPlaced").val();

	if(battleIDplaced == 0){

  		var refUpdate = db.ref("users/" + player2);
  		refUpdate.update({
  			"battleID": element.key
  		});

  		var refUpdate = db.ref("battle/" + element.key);
  		refUpdate.update({
  			"battleIDPlaced": 1
  		});


	}

	var battleEndTimestamp = element.child("timestampend").val();
	var diff = now - battleEndTimestamp;

	var battleActive = element.child("active").val();

	if(battleEndTimestamp != 0 && battleActive == 1){

	console.log("current timestamp: " + now);
	console.log("battle timestamp: " + battleEndTimestamp);
	console.log("difference: " + diff);

	if(diff > 0){

		console.log("execute battle");


		var refUpdate = db.ref("battle/" + element.key);
  		refUpdate.update({
  			"active": 0
  		}, function(error){

  			if(error){
  				console.log(error);
  			}

  		});

  		//get user coins

  		var balanceP1 = 0;
  		var balanceP2 = 0;

  		var refBattleDataPlayer1 = db.ref("/users/" +  player1);
  		refBattleDataPlayer1.once("value", function(snapshotPlayer1) {

  			var p1EC = snapshotPlayer1.child("extraCoins").val();
  			var p1Coins = snapshotPlayer1.child("coins").val();
  			var p1IngName = snapshotPlayer1.child("ingameName").val();

  			balanceP1 = p1EC + p1Coins;
  			console.log("balancePlayer1: " + balanceP1);


  			var refBattleDataPlayer2 = db.ref("/users/" +  player2);
  			refBattleDataPlayer2.once("value", function(snapshotPlayer2) {

  			var p2EC = snapshotPlayer2.child("extraCoins").val();
  			var p2Coins = snapshotPlayer2.child("coins").val();
  			var p2IngName = snapshotPlayer2.child("ingameName").val();

  			balanceP2 = p2EC + p2Coins;
  			console.log("balancePlayer2: " + balanceP2);

  			var bothCoins = balanceP1 + balanceP2;

  			minD = 1; 
         	maxD = bothCoins;

        	battleNumberWon = Math.floor(Math.random()* (maxD - minD +1)) + minD;

        	console.log("battleNumberWon: " + battleNumberWon);

        	if(battleNumberWon <= balanceP1){

        		console.log("Player 1 won");

        		var refUpdateP2 = db.ref("users/" + player2);
  					refUpdateP2.update({
  				"active": 0,
  				"eliminatedBy" : p1IngName
  				}, function(error){

  			if(error){
  				console.log(error);
  			}

  		})
  					var p1newCoins = p1Coins + balanceP2;

  				var refUpdateP1 = db.ref("users/" + player1);
  					refUpdateP1.update({
  					"coins": p1newCoins,
  					"amountWon": balanceP2,
  					"eliminated": p2IngName
  				}, function(error){

  			if(error){
  				console.log(error);
  			}

  		})



        	}else{

        		console.log("Player 2 won");

        		var refUpdateP1 = db.ref("users/" + player1);
  					refUpdateP1.update({
  				"active": 0,
  				"eliminatedBy" : p2IngName
  				}, function(error){

  			if(error){
  				console.log(error);
  			}

  		})
  					var p2newCoins = p2Coins + balanceP1;

  				var refUpdateP2 = db.ref("users/" + player2);
  					refUpdateP2.update({
  					"coins": p2newCoins,
  					"amountWon": balanceP1,
  					"eliminated": p1IngName
  				}, function(error){

  			if(error){
  				console.log(error);
  			}

  		})

        	}



  			});


  		}, function (errorObject) {

  			if(errorObject){
  			console.log("The read failed: " + errorObject.code);
  			}else{


  			}

			});

	}else{
		console.log("battle not starting yet");
	}


}


});


});

}, 5000);


//check battle Ende













