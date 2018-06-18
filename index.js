var allClients = []
var fnames = ["Steve", "Jerry", "Bob", "Robert", "Billy", "Ted", "Tony", "Telly", "Tom", "Vic", "Vinny", "Von", "Van", "Frank", "Anthony", "Mike", "Chris", "Charles", "Dave", "Doug", "Del", "Donny", "Dan", "Ernie", "Earl", "Enis", "Greg", "Brian", "Ralph", "Lou", "Henry", "Hank", "Trevor", "Travis", "Rory", "Barry"]
var lnames = ["Miller", "Stankowitz", "Jones", "Shitstein", "O'Mally", "Fugly", "Termatasoz", "Dix", "Cox", "Cumstein", "Adams", "Washington", "Jefferson", "Madison", "Monroe", "Jackson", "Tunginbls", "Ballinmowf", "Lincoln", "Puke", "Banger"]
var stateNames = ["PA", "NY", "AL", "AK", "AR", "CA", "CO", "CT"] 
var bankroll1 = [500, 1000]
var bankroll2 = [1000, 3000]
var bankroll3 = [5000, 20000]
var betsFor1 = [25, 50]
var betsFor2 = [100, 150, 200, 250]
var betsFor3 = [300, 500, 1000, 2000]
var clientTypes = ["Small Timer", "Pay Dumper", "High Roller"]
var kinds = ["Sports Betting", "Lottery"]
var creditRating = ["No Pay", "Slow Pay", "Solid Pay", "Lock Pay"]
var affiliation = false
var nbaBettingOpt = []
var nbaTotalsOpt = []
var wagers = []
var betStyles = ["Small Timer", "Pay Dumper", "High Roller"]
var clientOpp = []
var exoticWager = []
var doublesCheck = []
var submit = document.getElementById("submit")


function catchDbls(value){
      return (doublesCheck.indexOf(value) === -1) ? false : true   
}

submit.addEventListener("click", function(){

	setTrial()
})





function ClientObj(){

	this.firstName = fnames[Math.floor(Math.random() * fnames.length)]
	this.lastName = lnames[Math.floor(Math.random() * lnames.length)]
	this.state = stateNames[Math.floor(Math.random() * stateNames.length)]
	this.stakes = clientTypes[Math.floor(Math.random() * clientTypes.length)]
	this.betOptions = ["Sports"]
	this.betStyle = betStyles[Math.floor(Math.random() * betStyles.length)]
	this.sportsBets = []

	if(this.stakes == "Small Timer"){

		this.betAmounts = betsFor1
	
	}else if(this.stakes == "Pay Dumper"){

		this.betAmounts = betsFor2
	
	}else{

		this.betAmounts = betsFor3
	}

	if(this.stakes == clientTypes[0]){

		this.bankroll = randomBR(bankroll1[0], bankroll1[1])
	
	}else if(this.stakes == clientTypes[1]){

		this.bankroll = randomBR(bankroll2[0], bankroll2[1])
	
	}else{

		this.bankroll = randomBR(bankroll3[0], bankroll3[1])
	}

	if(this.betStyle == betStyles[0]){

		this.possWager = ["straight"]
	
	}else if(this.betStyle == betStyles[1]){

		this.possWager = ["straight", "2 team parlay", "straight", "straight", "3 team parlay", "straight", "straight", "straight"]
	
	}else if(this.betStyle == betStyles[2]){

		this.possWager = ["straight", "2 team parlay", "straight", "3 team parlay", "straight", "4 team parlay", "straight", "5 team parlay", "straight", "2 team teaser", "straight", "3 team teaser", "straight", "4 team teaser", "straight", "5 team teaser", "straight", "2 team reverse", "straight", "3 team reverse", "straight", "4 team reverse", "straight"]
	
	}else{

		this.possWager = ["2 team parlay", "3 team parlay", "4 team parlay", "5 team parlay", "2 team teaser", "3 team teaser", "4 team teaser", "5 team teaser", "2 team reverse", "3 team reverse", "4 team reverse"]
	}


	this.genWager = function(){

		var thePick1;
		var thePick2;
		var thePick3;
		var thePick4;
		var thePick5;

		var newWager = {}


		newWager.category = this.betOptions[Math.floor(Math.random() * this.betOptions.length)]
		newWager.type = this.possWager[Math.floor(Math.random() * this.possWager.length)]
		newWager.amount = this.betAmounts[Math.floor(Math.random() * this.betAmounts.length)]
		newWager.teams = []			
		

		if(newWager.type == "straight"){

				
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			newWager.teams.push(pick1)
				
		}else if(newWager.type == "2 team parlay" || newWager.type == "2 team reverse"){

			exoticWager = []

			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]


			while(pick2 == pick1){
				
				pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}
			
			

			exoticWager.push(pick1)
			exoticWager.push(pick2)
			newWager.teams.push(exoticWager)
				
		}else if(newWager.type == "3 team parlay" || newWager.type == "3 team reverse"){

			exoticWager = []
			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			

			while(pick2 == pick1){

				pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}
			

			while(pick3 == pick1 || pick3 == pick2){
			
				pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			}

			exoticWager.push(pick1)
			exoticWager.push(pick2)
			exoticWager.push(pick3)
			newWager.teams.push(exoticWager)
				
		}else if(newWager.type == "4 team parlay" || newWager.type == "4 team reverse"){

			exoticWager = []
			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick4 = clientOpp[Math.floor(Math.random() * clientOpp.length)]


			while(pick2 == pick1){

				pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}


			while(pick3 == pick1 || pick3 == pick2){
			
				pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}

			

			while(pick4 == pick1 || pick4 == pick2 || pick4 == pick3){
			
				pick4 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}

			

			exoticWager.push(pick1)
			exoticWager.push(pick2)
			exoticWager.push(pick3)
			exoticWager.push(pick4)
			newWager.teams.push(exoticWager)
		
		}else if(newWager.type == "2 team teaser"){

			exoticWager = []
			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]


			while(pick2 == pick1){
				
				pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}


			if(pick1[1][0] == "O"){

				thePick1 = "Over" + " " + pick1[0].teamName + " " + pick1[0].overTwoTeamTotal()

			}else if(pick1[1][0] == "U"){

				thePick1 = "Under" + " " + pick1[0].teamName + " " + pick1[0].underTwoTeamTotal()
			
			}else{

				if(pick1[0].twoTeamTeaser() > 0){

					thePick1 = pick1[0].teamName + " " + "+" + pick1[0].twoTeamTeaser()
				
				}else if(pick1[0].twoTeamTeaser() == 0){

					thePick1 = pick1[0].teamName + " " + "pk"
				
				}else{

					thePick1 = pick1[0].teamName + " " + pick1[0].twoTeamTeaser()
				}
			
			}

			if(pick2[1][0] == "O"){

				thePick2 = "Over" + " " + pick2[0].teamName + " " + pick2[0].overTwoTeamTotal()

			}else if(pick2[1][0] == "U"){

				thePick2 = "Under" + " " + pick2[0].teamName + " " + pick2[0].underTwoTeamTotal()
			
			}else{

				if(pick2[0].twoTeamTeaser() > 0){

					thePick2 = pick2[0].teamName + " " + "+" + pick2[0].twoTeamTeaser()
				
				}else if(pick2[0].twoTeamTeaser() == 0){

					thePick2 = pick2[0].teamName + " " + "pk"
				
				}else{

					thePick2 = pick2[0].teamName + " " + pick2[0].twoTeamTeaser()
				}
			}	
	
			exoticWager.push([pick1[0], thePick1])
			exoticWager.push([pick2[0], thePick2])
			newWager.teams.push(exoticWager)

		}else if(newWager.type == "3 team teaser"){

			exoticWager = []
			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			

			while(pick2 == pick1){

				pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}
			

			while(pick3 == pick1 || pick3 == pick2){
			
				pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			}

			if(pick1[1][0] == "O"){

				thePick1 = "Over" + " " + pick1[0].teamName + " " + pick1[0].overThreeTeamTotal()

			}else if(pick1[1][0] == "U"){

				thePick1 = "Under" + " " + pick1[0].teamName + " " + pick1[0].underThreeTeamTotal()
			
			}else{

				if(pick1[0].threeTeamTeaser() > 0){

					thePick1 = pick1[0].teamName + " " + "+" + pick1[0].threeTeamTeaser()
				
				}else if(pick1[0].threeTeamTeaser() == 0){

					thePick1 = pick1[0].teamName + " " + "pk"
				
				}else{

					thePick1 = pick1[0].teamName + " " + pick1[0].threeTeamTeaser()
				}
			
			}

			if(pick2[1][0] == "O"){

				thePick2 = "Over" + " " + pick2[0].teamName + " " + pick2[0].overThreeTeamTotal()

			}else if(pick2[1][0] == "U"){

				thePick2 = "Under" + " " + pick2[0].teamName + " " + pick2[0].underThreeTeamTotal()
			
			}else{

				if(pick2[0].threeTeamTeaser() > 0){

					thePick2 = pick2[0].teamName + " " + "+" + pick2[0].threeTeamTeaser()
				
				}else if(pick2[0].threeTeamTeaser() == 0){

					thePick2 = pick2[0].teamName + " " + "pk"
				
				}else{

					thePick2 = pick2[0].teamName + " " + pick2[0].threeTeamTeaser()
				}
			}

			if(pick3[1][0] == "O"){

				thePick3 = "Over" + " " + pick3[0].teamName + " " + pick3[0].overThreeTeamTotal()
			
			}else if(pick3[1][0] == "U"){

				thePick3 = "Under" + " " + pick3[0].teamName + " " + pick3[0].underThreeTeamTotal()
			
			}else{

				if(pick3[0].threeTeamTeaser() > 0){

					thePick3 = pick3[0].teamName + " " + "+" + pick3[0].threeTeamTeaser()
				
				}else if(pick3[0].threeTeamTeaser() == 0){

					thePick3 = pick3[0].teamName + " " + "pk"
				
				}else{

					thePick3 = pick3[0].teamName + " " + pick3[0].threeTeamTeaser()
				}
			}	
	
			exoticWager.push([pick1[0], thePick1])
			exoticWager.push([pick2[0], thePick2])
			exoticWager.push([pick3[0], thePick3])
			newWager.teams.push(exoticWager)

		}else if(newWager.type == "5 team teaser"){


			exoticWager = []
			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick4 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick5 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			doublesCheck.push(pick1[1])

			
			while(pick2 == pick1){
				
				pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}


			while(pick3 == pick1 || pick3 == pick2){
			
				pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}

			

			while(pick4 == pick1 || pick4 == pick2 || pick4 == pick3){
			
				pick4 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			}

			

			while(pick5 == pick1 || pick5 == pick2 || pick5 == pick3 || pick5 == pick4){
			
				pick5 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			} 

			

			if(pick1[1][0] == "O"){

				thePick1 = "Over" + " " + pick1[0].teamName + " " + pick1[0].overFiveTeamTotal()

			}else if(pick1[1][0] == "U"){

				thePick1 = "Under" + " " + pick1[0].teamName + " " + pick1[0].underFiveTeamTotal()
			
			}else{

				if(pick1[0].fiveTeamTeaser() > 0){

					thePick1 = pick1[0].teamName + " " + "+" + pick1[0].fiveTeamTeaser()
				
				}else if(pick1[0].fiveTeamTeaser() == 0){

					thePick1 = pick1[0].teamName + " " + "pk"
				
				}else{

					thePick1 = pick1[0].teamName + " " + pick1[0].fiveTeamTeaser()
				}
			
			}

			if(pick2[1][0] == "O"){

				thePick2 = "Over" + " " + pick2[0].teamName + " " + pick2[0].overFiveTeamTotal()

			}else if(pick2[1][0] == "U"){

				thePick2 = "Under" + " " + pick2[0].teamName + " " + pick2[0].underFiveTeamTotal()
			
			}else{

				if(pick2[0].fiveTeamTeaser() > 0){

					thePick2 = pick2[0].teamName + " " + "+" + pick2[0].fiveTeamTeaser()
				
				}else if(pick2[0].fiveTeamTeaser() == 0){

					thePick2 = pick2[0].teamName + " " + "pk"
				
				}else{

					thePick2 = pick2[0].teamName + " " + pick2[0].fiveTeamTeaser()
				}
			}

			if(pick3[1][0] == "O"){

				thePick3 = "Over" + " " + pick3[0].teamName + " " + pick3[0].overFiveTeamTotal()
			
			}else if(pick3[1][0] == "U"){

				thePick3 = "Under" + " " + pick3[0].teamName + " " + pick3[0].underFiveTeamTotal()
			
			}else{

				if(pick3[0].fiveTeamTeaser() > 0){

					thePick3 = pick3[0].teamName + " " + "+" + pick3[0].fiveTeamTeaser()
				
				}else if(pick3[0].fiveTeamTeaser() == 0){

					thePick3 = pick3[0].teamName + " " + "pk"
				
				}else{

					thePick3 = pick3[0].teamName + " " + pick3[0].fiveTeamTeaser()
				}
			}

			if(pick4[1][0] == "O"){

				thePick4 = "Over" + " " + pick4[0].teamName + " " + pick4[0].overFiveTeamTotal()

			}else if(pick4[1][0] == "U"){

				thePick4 = "Under" + " " + pick4[0].teamName + " " + pick4[0].underFiveTeamTotal()
			
			
			}else{

				if(pick4[0].fiveTeamTeaser() > 0){

					thePick4 = pick4[0].teamName + " " + "+" + pick4[0].fiveTeamTeaser()
				
				}else if(pick4[0].fiveTeamTeaser() == 0){

					thePick4 = pick4[0].teamName + " " + "pk"
				
				}else{

					thePick4 = pick4[0].teamName + " " + pick4[0].fiveTeamTeaser()
				}

			}

			if(pick5[1][0] == "O"){

				thePick5 = "Over" + " " + pick5[0].teamName + " " + pick5[0].overFiveTeamTotal()

			}else if(pick5[1][0] == "U"){

				thePick5 = "Under" + " " + pick5[0].teamName + " " + pick5[0].underFiveTeamTotal()
			
			}else{

				if(pick5[0].fiveTeamTeaser() > 0){

					thePick5 = pick5[0].teamName + " " + "+" + pick5[0].fiveTeamTeaser()
				
				}else if(pick5[0].fiveTeamTeaser() == 0){

					thePick5 = pick5[0].teamName + " " + "pk"
				
				}else{

					thePick5 = pick5[0].teamName + " " + pick5[0].fiveTeamTeaser()
				}

			}		

			exoticWager.push([pick1[0], thePick1])
			exoticWager.push([pick2[0], thePick2])
			exoticWager.push([pick3[0], thePick3])
			exoticWager.push([pick4[0], thePick4])
			exoticWager.push([pick5[0], thePick5])
			newWager.teams.push(exoticWager)


		}else{

			exoticWager = []

			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick4 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick5 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			doublesCheck.push(pick1[1])

			
			while(pick2 == pick1){
				
				pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}


			while(pick3 == pick1 || pick3 == pick2){
			
				pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			}

			

			while(pick4 == pick1 || pick4 == pick2 || pick4 == pick3){
			
				pick4 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			}

			

			while(pick5 == pick1 || pick5 == pick2 || pick5 == pick3 || pick5 == pick4){
			
				pick5 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			} 


			exoticWager.push(pick1)
			exoticWager.push(pick2)
			exoticWager.push(pick3)
			exoticWager.push(pick4)
			exoticWager.push(pick5)
			newWager.teams.push(exoticWager)
		}

		this.sportsBets.push(newWager)

	}


	this.scoreWager = function(){		

		for(i=0; i<this.sportsBets.length; i++){

			var straightW = []
			var straightL = []
			var parlayWinners = []
			var parlayLosers = []
			var parlayPush = []
			var revWinners = []
			var revLosers = []
			var revPush = []
			var teasWinners = []
			var teasLosers = []
			var teasPush = []
			var rev1 = 0
			var rev2 = 0
			var rev3 = 0
			var rev4 = 0
			var rev5 = 0
			var rev6 = 0

			if(this.sportsBets[i].type == "straight"){

					this.sportsBets[i].teams[0][0].gradeGame()

					if(this.sportsBets[i].teams[0][1][0] == "O"){

						if(this.sportsBets[i].teams[0][0].totalResult() == "Over"){

							straightW.push(this.sportsBets[i].teams[0])

							// console.log([this.bankroll, this.sportsBets[i].amount])
							// this.bankroll += this.sportsBets[i].amount
							
						}else if(this.sportsBets[i].teams[0][0].totalResult() == "Push"){

								this.bankroll = this.bankroll

						}else{

							straightL.push(this.sportsBets[i].teams[0])

							// console.log([this.bankroll, this.sportsBets[i].amount])
							// this.bankroll = this.bankroll - (1.1 * this.sportsBets[i].amount)

						}
					
					}else if(this.sportsBets[i].teams[0][1][0] == "U"){

						if(this.sportsBets[i].teams[0][0].totalResult() == "Over"){

							straightL.push(this.sportsBets[i].teams[0])
							
						}else if(this.sportsBets[i].teams[0][0].totalResult() == "Push"){

							this.bankroll = this.bankroll

						}else{

							straightW.push(this.sportsBets[i].teams[0])

						}


					}else{

						if(this.sportsBets[i].teams[0][0].moneyLine){

							if(this.sportsBets[i].teams[0][0].result == "win"){

								if(this.sportsBets[i].teams[0][0].moneyLine > 0){

									straightW.push(this.sportsBets[i].teams[0])

									// this.bankroll = this.bankroll + ((this.sportsBets[i].teams[0][0].moneyLine/100) * this.sportsBets[i].amount)
									
								}else{

									straightW.push(this.sportsBets[i].teams[0])

									// this.bankroll += this.sportsBets[i].amount

								}
							}

							if(this.sportsBets[i].teams[0][0].result == "loss"){

								if(this.sportsBets[i].teams[0][0].moneyLine > 0){

									straightL.push(this.sportsBets[i].teams[0])

									// this.bankroll -= this.sportsBets[i].amount
									
								}else{

									straightL.push(this.sportsBets[i].teams[0])

									// this.bankroll = this.bankroll - ((Math.abs(this.sportsBets[i].teams[0][0].moneyLine/100)) * this.sportsBets[i].amount)
								}
							}

						}



						if(this.sportsBets[i].teams[0][0].spread > -40 && this.sportsBets[i].teams[0][0].spread < 100){

							if(this.sportsBets[i].teams[0][0].spreadResult == "win"){

								straightW.push(this.sportsBets[i].teams[0])
								// this.bankroll += this.sportsBets[i].amount
								
							}else if(this.sportsBets[i].teams[0][0].spreadResult == "push"){

								this.bankroll = this.bankroll
								
							}else{

								straightL.push(this.sportsBets[i].teams[0])

								// this.bankroll = this.bankroll - (this.sportsBets[i].amount * 1.1)
							}
						}
					}
					console.log([straightW, straightL])

			}else{

				for(z=0; z<this.sportsBets[i].teams[0].length; z++){

					this.sportsBets[i].teams[0][z][0].gradeGame()

					
					
					if(this.sportsBets[i].type == "2 team parlay" || this.sportsBets[i].type == "3 team parlay" || this.sportsBets[i].type == "4 team parlay" || this.sportsBets[i].type == "5 team parlay"){

						if(this.sportsBets[i].teams[0][z][1][0] == "O"){

							if(this.sportsBets[i].teams[0][z][0].totalResult() == "Over"){

								parlayWinners.push(this.sportsBets[i].teams[0][z])

							}else if(this.sportsBets[i].teams[0][z][0].totalResult() == "Push"){

									parlayPush.push(this.sportsBets[i].teams[0][z])
								
							}else{

									parlayLosers.push(this.sportsBets[i].teams[0][z])

							}
						
						}else if(this.sportsBets[i].teams[0][z][1][0] == "U"){

							if(this.sportsBets[i].teams[0][z][0].totalResult() == "Under"){

									parlayWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].totalResult() == "Over"){

									parlayLosers.push(this.sportsBets[i].teams[0][z])

								}else{

									parlayPush.push(this.sportsBets[i].teams[0][z])

								}


						}else{

							if(this.sportsBets[i].teams[0][z][2] == "sides"){

								if(this.sportsBets[i].teams[0][z][0].result == "win"){

									parlayWinners.push(this.sportsBets[i].teams[0][z])

								}else if(this.sportsBets[i].teams[0][z][0].result == "loss"){

									parlayLosers.push(this.sportsBets[i].teams[0][z])

								}else{

									parlayPush.push(this.sportsBets[i].teams[0][z])

								}
							
							}else if(this.sportsBets[i].teams[0][z][0].spread){

								if(this.sportsBets[i].teams[0][z][0].spreadResult == "win"){

									parlayWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].spreadResult == "loss"){

									parlayLosers.push(this.sportsBets[i].teams[0][z])

								}else{

									parlayPush.push(this.sportsBets[i].teams[0][z])
								}

							}else{

								console.log("team has no result")
							}	
						}

					}else if(this.sportsBets[i].type == "2 team reverse" || this.sportsBets[i].type == "3 team reverse" || this.sportsBets[i].type == "4 team reverse"){



						if(this.sportsBets[i].teams[0][z][1][0] == "O"){

							if(this.sportsBets[i].teams[0][z][0].totalResult() == "Over"){

								revWinners.push(this.sportsBets[i].teams[0][z])

							}else if(this.sportsBets[i].teams[0][z][0].totalResult() == "Push"){

									revPush.push(this.sportsBets[i].teams[0][z])
								
							}else{

									revLosers.push(this.sportsBets[i].teams[0][z])

							}
						
						}else if(this.sportsBets[i].teams[0][z][1][0] == "U"){

							if(this.sportsBets[i].teams[0][z][0].totalResult() == "Under"){

									revWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].totalResult() == "Over"){

									revLosers.push(this.sportsBets[i].teams[0][z])

								}else{

									revPush.push(this.sportsBets[i].teams[0][z])

								}


						}else{

							if(this.sportsBets[i].teams[0][z][2] == "sides"){

								if(this.sportsBets[i].teams[0][z][0].result == "win"){

									revWinners.push(this.sportsBets[i].teams[0][z])

								}else if(this.sportsBets[i].teams[0][z][0].result == "loss"){

									revLosers.push(this.sportsBets[i].teams[0][z])

								}else{

									revPush.push(this.sportsBets[i].teams[0][z])

								}
							
							}else if(this.sportsBets[i].teams[0][z][0].spread){

								if(this.sportsBets[i].teams[0][z][0].spreadResult == "win"){

									revWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].spreadResult == "loss"){

									revLosers.push(this.sportsBets[i].teams[0][z])

								}else{

									revPush.push(this.sportsBets[i].teams[0][z])
								}

							}else{

								console.log("team has no result")
							}


						}


					}else{

						if(this.sportsBets[i].type == "2 team teaser"){
							
							if(this.sportsBets[i].teams[0][z][1][0] == "U"){

								if(this.sportsBets[i].teams[0][z][0].unTwoTTotalR() == "win"){

									teasWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].unTwoTTotalR() == "loss"){

									teasLosers.push(this.sportsBets[i].teams[0][z])
								
								}else{

									teasPush.push(this.sportsBets[i].teams[0][z])
								}

							
							}else if(this.sportsBets[i].teams[0][z][1][0] == "0"){

								if(this.sportsBets[i].teams[0][z][0].ovTwoTTotalR() == "win"){

									teasWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].ovTwoTTotalR() == "loss"){

									teasLosers.push(this.sportsBets[i].teams[0][z])
								
								}else{

									teasPush.push(this.sportsBets[i].teams[0][z])
								}
							
							}else{

								if(this.sportsBets[i].teams[0][z][0].twoTResult == "win"){

									teasWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].twoTResult == "loss"){

									teasLosers.push(this.sportsBets[i].teams[0][z])

								}else{

									teasPush.push(this.sportsBets[i].teams[0][z])

								}
							
							}
							console.log([teasWinners, teasLosers])



						}else if(this.sportsBets[i].type == "3 team teaser"){


							if(this.sportsBets[i].teams[0][z][1][0] == "U"){

								if(this.sportsBets[i].teams[0][z][0].unThreeTTotalR() == "win"){

									teasWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].unThreeTTotalR() == "loss"){

									teasLosers.push(this.sportsBets[i].teams[0][z])
								
								}else{

									teasPush.push(this.sportsBets[i].teams[0][z])
								}

							
							}else if(this.sportsBets[i].teams[0][z][1][0] == "O"){

								if(this.sportsBets[i].teams[0][z][0].ovThreeTTotalR() == "win"){

									teasWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].ovThreeTTotalR() == "loss"){

									teasLosers.push(this.sportsBets[i].teams[0][z])
								
								}else{

									teasPush.push(this.sportsBets[i].teams[0][z])
								}
							
							}else{

								if(this.sportsBets[i].teams[0][z][0].threeTResult == "win"){

									teasWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].score + this.sportsBets[i].teams[0][z][0].threeTeamTeaser() < this.sportsBets[i].teams[0][z][0].oppScore){

									teasLosers.push(this.sportsBets[i].teams[0][z])

								}else{

									teasPush.push(this.sportsBets[i].teams[0][z])

								}
							
							}



						}else{

							if(this.sportsBets[i].teams[0][z][1][0] == "U"){

								if(this.sportsBets[i].teams[0][z][0].unFiveTTotalR() == "win"){

									teasWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].unFiveTTotalR() == "loss"){

									teasLosers.push(this.sportsBets[i].teams[0][z])
								
								}else{

									teasPush.push(this.sportsBets[i].teams[0][z])
								}

							
							}else if(this.sportsBets[i].teams[0][z][1][0] == "0"){

								if(this.sportsBets[i].teams[0][z][0].ovFiveTTotalR() == "win"){

									teasWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].ovFiveTTotalR() == "loss"){

									teasLosers.push(this.sportsBets[i].teams[0][z])
								
								}else{

									teasPush.push(this.sportsBets[i].teams[0][z])
								}
							
							}else{

								if(this.sportsBets[i].teams[0][z][0].fiveTResult == "win"){

									teasWinners.push(this.sportsBets[i].teams[0][z])
								
								}else if(this.sportsBets[i].teams[0][z][0].fiveTResult == "loss"){

									teasLosers.push(this.sportsBets[i].teams[0][z])

								}else{

									teasPush.push(this.sportsBets[i].teams[0][z])

								}
							
							}

						}


					}
				}


			}


			if(straightW.length > 0){

				if(this.sportsBets[i].teams[0][1][0] == "O" || this.sportsBets[i].teams[0][1][0] == "U" ){

					console.log([this.bankroll, this.sportsBets[i].amount])

					this.bankroll += this.sportsBets[i].amount
					console.log(this.bankroll)
				
				}else{

					if(this.sportsBets[i].teams[0][0].moneyLine > 0){

						console.log([this.bankroll, this.sportsBets[i].amount])

						this.bankroll += (this.sportsBets[i].amount * (this.sportsBets[i].teams[0][0].moneyLine/100))
						console.log(this.bankroll)
					
					}else{

						if(this.sportsBets[i].teams[0][0].moneyLine < 0){
							
							this.bankroll += this.sportsBets[i].amount
							console.log(this.bankroll)
						}
					}

					if(this.sportsBets[i].teams[0][0].spread){

						console.log([this.bankroll, this.sportsBets[i].amount])

						this.bankroll += this.sportsBets[i].amount
						console.log(this.bankroll)
					}

				}
			
			}

			if(straightL.length > 0){

				if(this.sportsBets[i].teams[0][1][0] == "O" || this.sportsBets[i].teams[0][1][0] == "U" ){

					console.log([this.bankroll, this.sportsBets[i].amount])

					this.bankroll -= (this.sportsBets[i].amount * 1.1)

					console.log(this.bankroll)
				
				}else{

					if(this.sportsBets[i].teams[0][0].moneyLine < 0){

						console.log([this.bankroll, this.sportsBets[i].amount])

						this.bankroll += (this.sportsBets[i].amount * (this.sportsBets[i].teams[0][0].moneyLine/100))
						console.log(this.bankroll)
					
					}else{

						console.log([this.bankroll, this.sportsBets[i].amount])

						if(this.sportsBets[i].teams[0][0].moneyLine > 0){

							this.bankroll -= this.sportsBets[i].amount
							console.log(this.bankroll)
						}
					}

					if(this.sportsBets[i].teams[0][0].spread){

						console.log([this.bankroll, this.sportsBets[i].amount])

						this.bankroll -= (this.sportsBets[i].amount * 1.1)
						console.log(this.bankroll)
					}

				}


			}
			console.log(this.bankroll)


			
			

			if(teasLosers.length > 0){

				if(this.sportsBets[i].type == "2 team teaser"){

					this.bankroll -= (this.sportsBets[i].amount * 1.2)
					
				}else if(this.sportsBets[i].type == "3 team teaser"){

					this.bankroll -= (this.sportsBets[i].amount * 1.3)
					
				}else{

					this.bankroll -= (this.sportsBets[i].amount * 1.1)
				}
			
			}else{

				if(teasPush.length > 0){

					this.bankroll == this.bankroll
				
				}else if(teasWinners.length == 2 || teasWinners.length == 3){

					this.bankroll += this.sportsBets[i].amount
				
				}else{

					if(teasWinners.length == 5){

					this.bankroll += (this.sportsBets[i].amount * 4)

					}
				}
			}
			console.log(this.bankroll)

			if(revLosers.length == 4){

				if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev1 = 0 - (this.sportsBets[i].amount * 3)
					
					}else{

						rev1 = 0 - (this.sportsBets[i].amount * (Math.abs(revLosers[0][0].moneyLine/100)) * 3)

					}

				}else{

					rev1 = 0 - ((this.sportsBets[i].amount * 1.1) * 3)

				}

				if(revLosers[1][2] == "sides"){

					if(revLosers[1][0].moneyLine > 0){

						rev2 = 0 - (this.sportsBets[i].amount * 3)
					
					}else{

						rev2 = 0 - (this.sportsBets[i].amount * (Math.abs(revLosers[1][0].moneyLine/100)) * 3)

					}

				}else{

					rev2 = 0 - ((this.sportsBets[i].amount * 1.1) * 3)

				}

				if(revLosers[2][2] == "sides"){

					if(revLosers[2][0].moneyLine > 0){

						rev3 = 0 - (this.sportsBets[i].amount * 3)
					
					}else{

						rev3 = 0 - (this.sportsBets[i].amount * (Math.abs(revLosers[2][0].moneyLine/100)) * 3)

					}

				}else{

					rev3 = 0 - ((this.sportsBets[i].amount * 1.1) * 3)

				}

				if(revLosers[3][2] == "sides"){

					if(revLosers[3][0].moneyLine > 0){

						rev4 = 0 - (this.sportsBets[i].amount * 3)
					
					}else{

						rev4 = 0 - (this.sportsBets[i].amount * (Math.abs(revLosers[3][0].moneyLine/100)) * 3)

					}

				}else{

					rev4 = 0 - ((this.sportsBets[i].amount * 1.1) * 3)

				}

				this.bankroll = this.bankroll + rev1 + rev2 + rev3 + rev4


			}else if(revWinners.length == 0 && revLosers.length == 3){

				if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev1 = 0 - (this.sportsBets[i].amount * 2)
					
					}else{

						rev1 = 0 - (this.sportsBets[i].amount * (Math.abs(revLosers[0][0].moneyLine/100)) * 2)

					}

				}else{

					rev1 = 0 - ((this.sportsBets[i].amount * 1.1) * 2)

				}

				if(revLosers[1][2] == "sides"){

					if(revLosers[1][0].moneyLine > 0){

						rev2 = 0 - (this.sportsBets[i].amount * 2)
					
					}else{

						rev2 = 0 - (this.sportsBets[i].amount * (Math.abs(revLosers[1][0].moneyLine/100)) * 2)

					}

				}else{

					rev2 = 0 - ((this.sportsBets[i].amount * 1.1) * 2)

				}

				if(revLosers[2][2] == "sides"){

					if(revLosers[2][0].moneyLine > 0){

						rev3 = 0 - (this.sportsBets[i].amount * 2)
					
					}else{

						rev3 = 0 - (this.sportsBets[i].amount * (Math.abs(revLosers[2][0].moneyLine/100)) * 2)

					}

				}else{

					rev3 = 0 - ((this.sportsBets[i].amount * 1.1) * 2)

				}

				this.bankroll = this.bankroll + rev1 + rev2 + rev3

			
			}else if(revWinners.length == 0 && revLosers.length == 2){

				if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev1 = 0 - (this.sportsBets[i].amount)
					
					}else{

						rev1 = 0 - (this.sportsBets[i].amount * (Math.abs(revLosers[0][0].moneyLine/100)))

					}

				}else{

					rev1 = 0 - ((this.sportsBets[i].amount * 1.1))

				}

				if(revLosers[1][2] == "sides"){

					if(revLosers[1][0].moneyLine > 0){

						rev2 = 0 - (this.sportsBets[i].amount)
					
					}else{

						rev2 = 0 - (this.sportsBets[i].amount * (Math.abs(revLosers[1][0].moneyLine/100)))

					}

				}else{

					rev2 = 0 - ((this.sportsBets[i].amount * 1.1))

				}

				this.bankroll = this.bankroll + rev1 + rev2

			}else if(revWinners.length == 0 && revLosers.length == 1){

				if(revLosers[0][2] == 'sides'){

					if(revLosers[0][0].moneyLine > 0){

						this.bankroll -= this.sportsBets[i].amount
					
					}else{

						this.bankroll = this.bankroll - (this.sportsBets[i].amount * (Math.abs(revLosers[0][0].moneyLine)/100))
					}

				}else{

					this.bankroll = this.bankroll - (this.sportsBets[i].amount * 1.1)
				}


			}else if(revWinners.length == 1 && revLosers.length == 3){

				if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						if(revLosers[0][2] == "sides"){
						
							if(revLosers[0][0].moneyLine > 0){

								rev1 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - this.sportsBets[i].amount

							}else{

								rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)

							}

						}else{

							rev1 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - ((this.sportsBets[i].amount * 1.1) * 2)
						}
					
					}else{

						if(revLosers[0][2] == "sides"){

							if(revLosers[0][0].moneyLine > 0){

								rev1 = 0 - this.sportsBets[i].amount

							}else{

								rev1 = this.sportsBets[i].amount * ((revLosers[0][0].moneyLine/100) -1) + this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)
							}

						}else{

							rev1 = (.1 * this.sportsBets[i].amount) - (this.sportsBets[i].amount * 1.1)
						}



					}
				
				}else{

					if(revLosers[0][2] == "sides"){

						if(revLosers[0][0].moneyLine > 0){

							rev1 = 0 - this.sportsBets[i].amount
						
						}else{

							rev1 = ((revLosers[0][0].moneyLine/100) -1) * this.sportsBets[i].amount + ((revLosers[0][0].moneyLine/100) * this.sportsBets[i].amount)

						}
					
					}else{

						rev1 = (0 - this.sportsBets[i].amount) * 1.2

					}

				}

				if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						if(revLosers[1][2] == "sides"){
						
							if(revLosers[1][0].moneyLine > 0){

								rev2 = (((revWinners[1][0].moneyLine/100) -1) * this.sportsBets[i].amount) - this.sportsBets[i].amount

							}else{

								rev2 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100) * 2)

							}

						}else{

							rev2 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - ((this.sportsBets[i].amount * 1.1) * 2)
						}
					
					}else{

						if(revLosers[1][2] == "sides"){

							if(revLosers[1][0].moneyLine > 0){

								rev2 = 0 - this.sportsBets[i].amount

							}else{

								rev2 = this.sportsBets[i].amount * ((revLosers[1][0].moneyLine/100) -1) + this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)
							}

						}else{

							rev2 = (.1 * this.sportsBets[i].amount) - (this.sportsBets[i].amount * 1.1)
						}



					}
				
				}else{

					if(revLosers[1][2] == "sides"){

						if(revLosers[1][0].moneyLine > 0){

							rev2 = 0 - this.sportsBets[i].amount
						
						}else{

							rev2 = ((revLosers[1][0].moneyLine/100) -1) * this.sportsBets[i].amount + ((revLosers[1][0].moneyLine/100) * this.sportsBets[i].amount)

						}
					
					}else{

						rev2 = (0 - this.sportsBets[i].amount) * 1.2

					}

				}

				if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						if(revLosers[2][2] == "sides"){
						
							if(revLosers[2][0].moneyLine > 0){

								rev3 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - this.sportsBets[i].amount

							}else{

								rev3 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[2][0].moneyLine/100) * 2)

							}

						}else{

							rev3 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - ((this.sportsBets[i].amount * 1.1) * 2)
						}
					
					}else{

						if(revLosers[2][2] == "sides"){

							if(revLosers[2][0].moneyLine > 0){

								rev3 = 0 - this.sportsBets[i].amount

							}else{

								rev3 = this.sportsBets[i].amount * ((revLosers[2][0].moneyLine/100) -1) + this.sportsBets[i].amount * (revLosers[2][0].moneyLine/100)
							}

						}else{

							rev3 = (.1 * this.sportsBets[i].amount) - (this.sportsBets[i].amount * 1.1)
						}



					}
				
				}else{

					if(revLosers[2][2] == "sides"){

						if(revLosers[2][0].moneyLine > 0){

							rev3 = 0 - this.sportsBets[i].amount
						
						}else{

							rev3 = ((revLosers[2][0].moneyLine/100) -1) * this.sportsBets[i].amount + ((revLosers[2][0].moneyLine/100) * this.sportsBets[i].amount)

						}
					
					}else{

						rev3 = (0 - this.sportsBets[i].amount) * 1.2

					}

				}

				if(revLosers[0][2] == "sides" && revLosers[1][2] == "sides" && revLosers[2][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0 && revLosers[1][0].moneyLine > 0 && revLosers[2][0].moneyLine > 0){

						rev4 = this.sportsBets[i].amount * 6
					
					}else if(revLosers[0][0].moneyLine < 0 && revLosers[1][0].moneyLine < 0 && revLosers[2][0].moneyLine < 0){

						rev4 = ((this.sportsBets[i].amount * revLosers[0][0].moneyLine/100) * 2) + ((this.sportsBets[i].amount * revLosers[1][0].moneyLine/100) * 2) + ((this.sportsBets[i].amount * revLosers[2][0].moneyLine/100) * 2)
					
					}else if(revLosers[0][0].moneyLine > 0 && revLosers[1][0].moneyLine < 0 && revLosers[2][0].moneyLine < 0){

						rev4 = ((0 - this.sportsBets[i].amount) * 2) + ((this.sportsBets[i].amount * revLosers[1][0].moneyLine/100) * 2) + ((this.sportsBets[i].amount * revLosers[2][0].moneyLine/100) * 2)
					
					}else if(revLosers[0][0].moneyLine < 0 && revLosers[1][0].moneyLine > 0 && revLosers[2][0].moneyLine < 0){

						rev4 = ((0 - this.sportsBets[i].amount) * 2) + ((this.sportsBets[i].amount * revLosers[0][0].moneyLine/100) * 2) + ((this.sportsBets[i].amount * revLosers[2][0].moneyLine/100) * 2)
					
					}else if(revLosers[0][0].moneyLine < 0 && revLosers[1][0].moneyLine < 0 && revLosers[2][0].moneyLine > 0){

						rev4 = ((0 - this.sportsBets[i].amount) * 2) + ((this.sportsBets[i].amount * revLosers[0][0].moneyLine/100) * 2) + ((this.sportsBets[i].amount * revLosers[1][0].moneyLine/100) * 2)

					}else if(revLosers[0][0].moneyLine > 0 && revLosers[1][0].moneyLine > 0 && revLosers[2][0].moneyLine < 0){

						rev4 = ((0 - this.sportsBets[i].amount) * 2) + ((0 - this.sportsBets[i].amount) * 2) + ((this.sportsBets[i].amount * revLosers[2][0].moneyLine/100) * 2) 
					
					}else if(revLosers[0][0].moneyLine > 0 && revLosers[1][0].moneyLine < 0 && revLosers[2][0].moneyLine > 0){

						rev4 = ((0 - this.sportsBets[i].amount) * 2) + ((0 - this.sportsBets[i].amount) * 2) + ((this.sportsBets[i].amount * revLosers[1][0].moneyLine/100) * 2)
					
					}else if(revLosers[0][0].moneyLine < 0 && revLosers[1][0].moneyLine > 0 && revLosers[2][0].moneyLine > 0){

						rev4 = ((0 - this.sportsBets[i].amount) * 2) + ((0 - this.sportsBets[i].amount) * 2) + ((this.sportsBets[i].amount * revLosers[0][0].moneyLine/100) * 2)

					}
				}else if(revLosers[0][2] == "sides" && revLosers[1][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0 && revLosers[1][0].moneyLine > 0 ){

						rev4 = 0 - (this.sportsBets[i].amount * 4) - (this.sportsBets[i].amount * 2.2) 
					
					}else if(revLosers[0][0].moneyLine < 0 && revLosers[1][0].moneyLine < 0){

						rev4 = ((this.sportsBets[i].amount * revLosers[0][0].moneyLine/100) * 2) + ((this.sportsBets[i].amount * revLosers[1][0].moneyLine/100) * 2) - (this.sportsBets[i].amount * 2.2)

					}else if(revLosers[0][0].moneyLine > 0 && revLosers[1][0].moneyLine < 0){

						rev4 = (0 - (this.sportsBets[i].amount * 2)) + ((this.sportsBets[i].amount * revLosers[1][0].moneyLine/100) * 2) - (this.sportsBets[i].amount * 2.2)
					
					}else if(revLosers[0][0].moneyLine < 0 && revLosers[1][0].moneyLine > 0){

						rev4 = ((this.sportsBets[i].amount * revLosers[0][0].moneyLine/100) * 2) + (0 - (this.sportsBets[i].amount * 2)) - (this.sportsBets[i].amount * 2.2)  
					}
				
				}else if(revLosers[0][2] == "sides" && revLosers[2][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0 && revLosers[2][0].moneyLine > 0 ){

						rev4 = 0 - (this.sportsBets[i].amount * 4) - (this.sportsBets[i].amount * 2.2) 
					
					}else if(revLosers[0][0].moneyLine < 0 && revLosers[2][0].moneyLine < 0){

						rev4 = ((this.sportsBets[i].amount * revLosers[0][0].moneyLine/100) * 2) + ((this.sportsBets[i].amount * revLosers[2][0].moneyLine/100) * 2) - (this.sportsBets[i].amount * 2.2)

					}else if(revLosers[0][0].moneyLine > 0 && revLosers[2][0].moneyLine < 0){

						rev4 = (0 - (this.sportsBets[i].amount * 2)) + ((this.sportsBets[i].amount * revLosers[2][0].moneyLine/100) * 2) - (this.sportsBets[i].amount * 2.2)
					
					}else if(revLosers[0][0].moneyLine < 0 && revLosers[2][0].moneyLine > 0){

						rev4 = ((this.sportsBets[i].amount * revLosers[0][0].moneyLine/100) * 2) + (0 - (this.sportsBets[i].amount * 2)) - (this.sportsBets[i].amount * 2.2)  
					}
				
				}else if(revLosers[1][2] == "sides" && revLosers[2][2] == "sides"){

					if(revLosers[1][0].moneyLine > 0 && revLosers[2][0].moneyLine > 0 ){

						rev4 = 0 - (this.sportsBets[i].amount * 4) - (this.sportsBets[i].amount * 2.2) 
					
					}else if(revLosers[1][0].moneyLine < 0 && revLosers[2][0].moneyLine < 0){

						rev4 = ((this.sportsBets[i].amount * revLosers[1][0].moneyLine/100) * 2) + ((this.sportsBets[i].amount * revLosers[2][0].moneyLine/100) * 2) - (this.sportsBets[i].amount * 2.2)

					}else if(revLosers[0][0].moneyLine > 0 && revLosers[2][0].moneyLine < 0){

						rev4 = (0 - (this.sportsBets[i].amount * 2)) + ((this.sportsBets[i].amount * revLosers[2][0].moneyLine/100) * 2) - (this.sportsBets[i].amount * 2.2)
					
					}else if(revLosers[1][0].moneyLine < 0 && revLosers[2][0].moneyLine > 0){

						rev4 = ((this.sportsBets[i].amount * revLosers[1][0].moneyLine/100) * 2) + (0 - (this.sportsBets[i].amount * 2)) - (this.sportsBets[i].amount * 2.2)  
					}
				
				}else{

					rev4 = 0 - (this.sportsBets[i].amount * 6.6)

				}

				console.log([rev1, rev2, rev3, rev4])

				this.bankroll = this.bankroll + rev1 + rev2 + rev3 + rev4

			}else if(revWinners.length == 1 && revLosers.length == 2){



				if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						if(revLosers[0][2] == "sides"){
						
							if(revLosers[0][0].moneyLine > 0){

								rev1 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - this.sportsBets[i].amount

							}else{

								rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)

							}

						}else{

							rev1 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - ((this.sportsBets[i].amount * 1.1) * 2)
						}
					
					}else{

						if(revLosers[0][2] == "sides"){

							if(revLosers[0][0].moneyLine > 0){

								rev1 = 0 - this.sportsBets[i].amount

							}else{

								rev1 = this.sportsBets[i].amount * ((revLosers[0][0].moneyLine/100) -1) + this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)
							}

						}else{

							rev1 = (.1 * this.sportsBets[i].amount) - (this.sportsBets[i].amount * 1.1)
						}



					}
				
				}else{

					if(revLosers[0][2] == "sides"){

						if(revLosers[0][0].moneyLine > 0){

							rev1 = 0 - this.sportsBets[i].amount
						
						}else{

							rev1 = ((revLosers[0][0].moneyLine/100) -1) * this.sportsBets[i].amount + ((revLosers[0][0].moneyLine/100) * this.sportsBets[i].amount)

						}
					
					}else{

						rev1 = (0 - this.sportsBets[i].amount) * 1.2

					}

				}

				if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						if(revLosers[1][2] == "sides"){
						
							if(revLosers[1][0].moneyLine > 0){

								rev2 = (((revWinners[1][0].moneyLine/100) -1) * this.sportsBets[i].amount) - this.sportsBets[i].amount

							}else{

								rev2 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100) * 2)

							}

						}else{

							rev2 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - ((this.sportsBets[i].amount * 1.1) * 2)
						}
					
					}else{

						if(revLosers[1][2] == "sides"){

							if(revLosers[1][0].moneyLine > 0){

								rev2 = 0 - this.sportsBets[i].amount

							}else{

								rev2 = this.sportsBets[i].amount * ((revLosers[1][0].moneyLine/100) -1) + this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100)
							}

						}else{

							rev2 = (.1 * this.sportsBets[i].amount) - (this.sportsBets[i].amount * 1.1)
						}



					}
				
				}else{

					if(revLosers[1][2] == "sides"){

						if(revLosers[1][0].moneyLine > 0){

							rev2 = 0 - this.sportsBets[i].amount
						
						}else{

							rev2 = ((revLosers[1][0].moneyLine/100) -1) * this.sportsBets[i].amount + ((revLosers[1][0].moneyLine/100) * this.sportsBets[i].amount)

						}
					
					}else{

						rev2 = (0 - this.sportsBets[i].amount) * 1.2

					}

				}

				if(revLosers[0][2] == "sides"){
					

					if(revLosers[0][0].moneyLine > 0){

						if(revLosers[1][2] == "sides"){
						
							if(revLosers[1][0].moneyLine > 0){

								rev3 = (((revLosers[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - this.sportsBets[i].amount
								

							}else{

								rev3 = (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100) * 2)
								
							}

						}else{

							rev3 = (((revLosers[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - ((this.sportsBets[i].amount * 1.1) * 2)
							
						}
					
					}else{

						if(revLosers[1][2] == "sides"){

							if(revLosers[1][0].moneyLine > 0){

								rev3 = 0 - this.sportsBets[i].amount
								

							}else{

								rev3 = this.sportsBets[i].amount * ((revLosers[1][0].moneyLine/100) -1) + this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100)
								
							}

						}else{

							rev3 = (.1 * this.sportsBets[i].amount) - (this.sportsBets[i].amount * 1.1)
							
						}



					}


				}else{

					if(revLosers[1][2] == "sides"){

							if(revLosers[1][0].moneyLine > 0){

								rev3 = (0 - (this.sportsBets[i].amount * 1.1)) - (this.sportsBets[i].amount)
								

							}else{

								rev3 = (0 - (this.sportsBets[i].amount * 1.1)) + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100))
								
							}

						}else{

							rev3 = 0 - (this.sportsBets[i].amount * 2.2)
							
						}


				}


				this.bankroll = this.bankroll + rev1 + rev2 + rev3
			
			}else if(revWinners.length == 1 && revLosers.length == 1){

				
				if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						if(revLosers[0][2] == "sides"){
						
							if(revLosers[0][0].moneyLine > 0){

								rev1 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - this.sportsBets[i].amount

							}else{

								rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)

							}

						}else{

							rev1 = (((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount) - ((this.sportsBets[i].amount * 1.1) * 2)
						}
					
					}else{

						if(revLosers[0][2] == "sides"){

							if(revLosers[0][0].moneyLine > 0){

								rev1 = 0 - this.sportsBets[i].amount

							}else{

								rev1 = this.sportsBets[i].amount * ((revLosers[0][0].moneyLine/100) -1) + this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)
							}

						}else{

							rev1 = (.1 * this.sportsBets[i].amount) - (this.sportsBets[i].amount * 1.1)
						}



					}
				
				}else{

					if(revLosers[0][2] == "sides"){

						if(revLosers[0][0].moneyLine > 0){

							rev1 = 0 - this.sportsBets[i].amount
						
						}else{

							rev1 = ((revLosers[0][0].moneyLine/100) -1) * this.sportsBets[i].amount + ((revLosers[0][0].moneyLine/100) * this.sportsBets[i].amount)

						}
					
					}else{

						rev1 = this.sportsBets[i].amount + (0 - this.sportsBets[i].amount) * 2.2

					}

				}

				this.bankroll += rev1

			}else if(revWinners.length == 1 && revLosers.length == 0){

				if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev1 = this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100)
					
					}else{

						rev1 = this.sportsBets[i].amount
					}
				
				}else{

					rev1 = this.sportsBets[i].amount

				}

				this.bankroll += rev1


			}else if(revWinners.length == 2 && revLosers.length == 2){

				if(revWinners[0][2] == "sides" && revWinners[1][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[1][0].moneyLine > 0){

						rev1 = this.sportsBets[i].amount * ((revWinners[0][0].moneyLine/100) * 2) +  this.sportsBets[i].amount * ((revWinners[1][0].moneyLine/100) * 2)
					
					}else if(revWinners[0][0].moneyLine > 0 && revWinners[1][0].moneyLine < 0){

						rev1 = this.sportsBets[i].amount * ((revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine > 0){

						rev1 = this.sportsBets[i].amount * ((revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)
					
					}else{

						rev1 = this.sportsBets[i].amount * 4
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev1 = this.sportsBets[i].amount * ((revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)
					
					}else{

						rev1 = this.sportsBets[i].amount * 4

					}

				}else if(revWinners[1][2] == "sides"){


					if(revWinners[1][0].moneyLine > 0){

						rev1 = this.sportsBets[i].amount * ((revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)
					
					}else{

						rev1 = this.sportsBets[i].amount * 4

					}


				}else{

					rev1 = this.sportsBets[i].amount * 4

				}

				if(revWinners[0][2] == "sides" && revLosers [0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revLosers[0][0].moneyLine > 0){

						rev2 = ((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount - (this.sportsBets[i].amount * 2)
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[0][0].moneyLine < 0){

						rev2 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[0][0].moneyLine > 0){

						rev2 = 0 - this.sportsBets[i].amount
					
					}else{

						rev2 = this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) - (this.sportsBets[i].amount * 2)

					}
				
				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev2 = this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) - (this.sportsBets[i].amount * 2.2)
					
					}else{

						rev2 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2.2)
					}

				}else if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev2 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2)
					
					}else{

						rev2 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine) * 2)
					}
				
				}else{

					rev2 = 0 - (this.sportsBets[i].amount * 1.2)
				}




				if(revWinners[0][2] == "sides" && revLosers [1][2] == "sides"){


					if(revWinners[0][0].moneyLine > 0 && revLosers[1][0].moneyLine > 0){

						rev3 = ((revWinners[0][0].moneyLine/100) -1) * this.sportsBets[i].amount - (this.sportsBets[i].amount * 2)
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[1][0].moneyLine < 0){

						rev3 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100)) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[1][0].moneyLine > 0){

						rev3 = 0 - this.sportsBets[i].amount
					
					}else{

						rev3 = this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) - (this.sportsBets[i].amount * 2)

					}	
				
				
				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev3 = this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) - (this.sportsBets[i].amount * 2.2)
					
					}else{

						rev3 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2.2)
					}

				}else if(revLosers[1][2] == "sides"){

					if(revLosers[1][0].moneyLine > 0){

						rev3 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2)
					
					}else{

						rev3 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine) * 2)
					}
				
				}else{

					rev3 = 0 - (this.sportsBets[i].amount * 1.2)
				}


				if(revWinners[1][2] == "sides" && revLosers [0][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0 && revLosers[0][0].moneyLine > 0){

						rev4 = ((revWinners[1][0].moneyLine/100) -1) * this.sportsBets[i].amount - (this.sportsBets[i].amount * 2)
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[0][0].moneyLine < 0){

						rev4 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)) 
					
					}else if(revWinners[1][0].moneyLine < 0 && revLosers[0][0].moneyLine > 0){

						rev4 = 0 - this.sportsBets[i].amount
					
					}else{

						rev4 = this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) - (this.sportsBets[i].amount * 2)

					}
			
				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev4 = this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) - (this.sportsBets[i].amount * 2.2)
					
					}else{

						rev4 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2.2)
					}

				}else if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev4 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2)
					
					}else{

						rev4 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine) * 2)
					}
				
				}else{

					rev4 = 0 - (this.sportsBets[i].amount * 1.2)
				}		

			
				if(revWinners[1][2] == "sides" && revLosers [1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0 && revLosers[1][0].moneyLine > 0){

						rev5 = ((revWinners[1][0].moneyLine/100) -1) * this.sportsBets[i].amount - (this.sportsBets[i].amount * 2)
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[0][0].moneyLine < 0){

						rev5 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100)) 
					
					}else if(revWinners[1][0].moneyLine < 0 && revLosers[1][0].moneyLine > 0){

						rev5 = 0 - this.sportsBets[i].amount
					
					}else{

						rev5 = this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) - (this.sportsBets[i].amount * 2)

					}
				
				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev5 = this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) - (this.sportsBets[i].amount * 2.2)
					
					}else{

						rev5 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2.2)
					}

				}else if(revLosers[1][2] == "sides"){

					if(revLosers[1][0].moneyLine > 0){

						rev5 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2)
					
					}else{

						rev5 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine) * 2)
					}
				
				}else{

					rev5 = 0 - (this.sportsBets[i].amount * 1.2)
				}


				if(revLosers[0][2] == "sides" && revLosers[1][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0 && revLosers[1][0].moneyLine > 0){

						rev6 = 0 - (this.sportsBets[i].amount * 2)
				
					}else if(revLosers[0][0].moneyLine < 0 && revLosers[1][0].moneyLine < 0){

						rev6 = (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)) + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100)) 

					}else if(revLosers[0][0].moneyLine < 0 && revLosers[1][0].moneyLine > 0){

						rev6 = (0 - this.sportsBets[i].amount) + (this.sportsBets[i].amount * (revLosers[1][0].moneyLine/100))
				
					}else{

						rev6 = (0 - this.sportsBets[i].amount) + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100)) 

					}

				}else{

					rev6 = 0 - (this.sportsBets[i].amount * 2.2)
				}

				console.log([rev1, rev2, rev3, rev4, rev5, rev6])

				this.bankroll = this.bankroll + rev1 + rev2 + rev3 + rev4 + rev5 + rev6
			
			}else if(revWinners.length == 2 && revLosers.length == 1){

				if(revWinners[0][2] == "sides" && revWinners[1][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine < 0){

						rev1 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2)
					
					}else{

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}

				}else{

					rev1 = this.sportsBets[i].amount * 4
				}

				if(revWinners[0][2] == "sides" && revLosers[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revLosers[0][0].moneyLine > 0){

						rev2 = 0 - this.sportsBets[i].amount
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[0][0].moneyLine < 0){

						rev2 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[0][0].moneyLine > 0){

						rev2 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2))
					
					}else{

						rev2 = this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) - (this.sportsBets[i].amount * 2.2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100)) - (this.sportsBets[i].amount * 2.2)

					}else{

						rev2 = (this.sportsBets[i].amount) - (this.sportsBets[i].amount * 2.2)

					}
				
				}else if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev2 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2.2)

					}else{

						rev2 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)

					}

				}else{

					rev2 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2.2))
				}

				if(revWinners[1][2] == "sides" && revLosers[0][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0 && revLosers[0][0].moneyLine > 0){

						rev3 = 0 - this.sportsBets[i].amount
					
					}else if(revWinners[1][0].moneyLine < 0 && revLosers[0][0].moneyLine < 0){

						rev3 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)
					
					}else if(revWinners[1][0].moneyLine < 0 && revLosers[0][0].moneyLine > 0){

						rev3 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2))
					
					}else{

						rev3 = this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) - (this.sportsBets[i].amount * 2.2)
					}

				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100)) - (this.sportsBets[i].amount * 2.2)

					}else{

						rev3 = (this.sportsBets[i].amount) - (this.sportsBets[i].amount * 2.2)

					}
				
				}else if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev3 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2)

					}else{

						rev3 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)

					}

				}else{

					rev3 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2.2))
				}

				console.log([rev1, rev2, rev3])

				this.bankroll = this.bankroll + rev1 + rev2 + rev3
			}

			if(revWinners.length == 2 && revLosers.length == 0){

				if(revWinners[0][2] == "sides" && revWinners[1][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine < 0){

						rev1 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2)
					
					}else{

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}

				}else{

					rev1 = this.sportsBets[i].amount * 4

				}

				this.bankroll += rev1

			}

			if(revWinners.length == 3 && revLosers.length == 1){

				if(revWinners[0][2] == "sides" && revWinners[1][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine < 0){

						rev1 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2)
					
					}else{

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}

				}else{

					rev1 = this.sportsBets[i].amount * 4
					console.log(rev1)

				}

				if(revWinners[0][2] == "sides" && revWinners[2][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[2][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[2][0].moneyLine < 0){

						rev2 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[2][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2)
					
					}else{

						rev2 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev2 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[2][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev2 = this.sportsBets[i].amount * 4

					}

				}else{

					rev2 = this.sportsBets[i].amount * 4
					console.log(rev2)
				}

				if(revWinners[1][2] == "sides" && revWinners[2][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0 && revWinners[2][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) 
					
					}else if(revWinners[1][0].moneyLine < 0 && revWinners[2][0].moneyLine < 0){

						rev3 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[1][0].moneyLine < 0 && revWinners[2][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2)
					
					}else{

						rev3 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2)
					}

				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev3 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[2][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev3 = this.sportsBets[i].amount * 4

					}

				}else{

					rev3 = this.sportsBets[i].amount * 4
					console.log(rev3)
				}

				if(revWinners[0][2] == "sides" && revLosers[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revLosers[0][0].moneyLine > 0){

						rev4 = 0 - this.sportsBets[i].amount
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[0][0].moneyLine < 0){

						rev4 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)
					
					}else if(revWinners[0][0].moneyLine < 0 && revLosers[0][0].moneyLine > 0){

						rev4 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2))
					
					}else{

						rev4 = this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) - (this.sportsBets[i].amount * 2.2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev4 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100)) - (this.sportsBets[i].amount * 2.2)

					}else{

						rev4 = (this.sportsBets[i].amount) - (this.sportsBets[i].amount * 2.2)

					}
				
				}else if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev4 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2.2)

					}else{

						rev4 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)

					}

				}else{

					rev4 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2.2))
					console.log(rev4)
				}

				if(revWinners[1][2] == "sides" && revLosers[0][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0 && revLosers[0][0].moneyLine > 0){

						rev5 = 0 - this.sportsBets[i].amount
					
					}else if(revWinners[1][0].moneyLine < 0 && revLosers[0][0].moneyLine < 0){

						rev5 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)
					
					}else if(revWinners[1][0].moneyLine < 0 && revLosers[0][0].moneyLine > 0){

						rev5 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2))
					
					}else{

						rev5 = this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) - (this.sportsBets[i].amount * 2.2)
					}

				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev5 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100)) - (this.sportsBets[i].amount * 2.2)

					}else{

						rev5 = (this.sportsBets[i].amount) - (this.sportsBets[i].amount * 2.2)

					}
				
				}else if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev5 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2.2)

					}else{

						rev5 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)

					}

				}else{

					rev5 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2.2))

				}

				if(revWinners[2][2] == "sides" && revLosers[0][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0 && revLosers[0][0].moneyLine > 0){

						rev6 = 0 - this.sportsBets[i].amount
					
					}else if(revWinners[2][0].moneyLine < 0 && revLosers[0][0].moneyLine < 0){

						rev6 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)
					
					}else if(revWinners[2][0].moneyLine < 0 && revLosers[0][0].moneyLine > 0){

						rev6 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2))
					
					}else{

						rev6 = this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) - (this.sportsBets[i].amount * 2.2)
					}

				}else if(revWinners[2][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0){

						rev6 = (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100)) - (this.sportsBets[i].amount * 2.2)

					}else{

						rev6 = (this.sportsBets[i].amount) - (this.sportsBets[i].amount * 2.2)

					}
				
				}else if(revLosers[0][2] == "sides"){

					if(revLosers[0][0].moneyLine > 0){

						rev6 = this.sportsBets[i].amount - (this.sportsBets[i].amount * 2.2)

					}else{

						rev6 = this.sportsBets[i].amount + (this.sportsBets[i].amount * (revLosers[0][0].moneyLine/100) * 2)

					}

				}else{

					rev6 = this.sportsBets[i].amount + (0 - (this.sportsBets[i].amount * 2.2))
				}

				console.log([rev1, rev2, rev3, rev4, rev5, rev6])

				this.bankroll = this.bankroll + rev1 + rev2 + rev3 + rev4 + rev5 + rev6

			}

			if(revWinners.length == 3 && revLosers.length == 0){

				if(revWinners[0][2] == "sides" && revWinners[1][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine < 0){

						rev1 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2)
					
					}else{

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}

				}else{

					rev1 = this.sportsBets[i].amount * 4

				}

				if(revWinners[0][2] == "sides" && revWinners[2][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[2][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[2][0].moneyLine < 0){

						rev2 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[2][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2)
					
					}else{

						rev2 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev2 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[2][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev2 = this.sportsBets[i].amount * 4

					}

				}else{

					rev2 = this.sportsBets[i].amount * 4

				}

				if(revWinners[1][2] == "sides" && revWinners[2][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0 && revWinners[2][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) 
					
					}else if(revWinners[1][0].moneyLine < 0 && revWinners[2][0].moneyLine < 0){

						rev3 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[1][0].moneyLine < 0 && revWinners[2][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2)
					
					}else{

						rev3 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2)
					}

				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev3 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[2][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev3 = this.sportsBets[i].amount * 4

					}

				}else{

					rev3 = this.sportsBets[i].amount * 4

				}

				this.bankroll = this.bankroll + rev1 + rev2 + rev3
			}



			if(revWinners.length == 4 && revLosers.length == 0){

				if(revWinners[0][2] == "sides" && revWinners[1][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine < 0){

						rev1 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2)
					
					}else{

						rev1 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev1 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev1 = this.sportsBets[i].amount * 4

					}

				}else{

					rev1 = this.sportsBets[i].amount * 4

				}

				if(revWinners[0][2] == "sides" && revWinners[2][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[2][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[2][0].moneyLine < 0){

						rev2 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[2][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2)
					
					}else{

						rev2 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev2 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[2][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0){

						rev2 = (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev2 = this.sportsBets[i].amount * 4

					}

				}else{

					rev2 = this.sportsBets[i].amount * 4

				}

				if(revWinners[0][2] == "sides" && revWinners[3][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0 && revWinners[3][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2) 
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[3][0].moneyLine < 0){

						rev3 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[0][0].moneyLine < 0 && revWinners[3][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2)
					
					}else{

						rev3 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2)
					}

				}else if(revWinners[0][2] == "sides"){

					if(revWinners[0][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[0][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev3 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[3][2] == "sides"){

					if(revWinners[3][0].moneyLine > 0){

						rev3 = (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev3 = this.sportsBets[i].amount * 4

					}

				}else{

					rev3 = this.sportsBets[i].amount * 4

				}

				if(revWinners[1][2] == "sides" && revWinners[2][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0 && revWinners[2][0].moneyLine > 0){

						rev4 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) 
					
					}else if(revWinners[1][0].moneyLine < 0 && revWinners[2][0].moneyLine < 0){

						rev4 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[1][0].moneyLine < 0 && revWinners[2][0].moneyLine > 0){

						rev4 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2)
					
					}else{

						rev4 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2)
					}

				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev4 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev4 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[2][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0){

						rev4 = (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev4 = this.sportsBets[i].amount * 4

					}

				}else{

					rev4 = this.sportsBets[i].amount * 4

				}

				if(revWinners[1][2] == "sides" && revWinners[3][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0 && revWinners[3][0].moneyLine > 0){

						rev5 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2) 
					
					}else if(revWinners[1][0].moneyLine < 0 && revWinners[3][0].moneyLine < 0){

						rev5 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[1][0].moneyLine < 0 && revWinners[3][0].moneyLine > 0){

						rev5 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2)
					
					}else{

						rev5 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2)
					}

				}else if(revWinners[1][2] == "sides"){

					if(revWinners[1][0].moneyLine > 0){

						rev5 = (this.sportsBets[i].amount * (revWinners[1][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev5 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[3][2] == "sides"){

					if(revWinners[3][0].moneyLine > 0){

						rev5 = (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev5 = this.sportsBets[i].amount * 4

					}

				}else{

					rev5 = this.sportsBets[i].amount * 4

				}

				if(revWinners[2][2] == "sides" && revWinners[3][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0 && revWinners[3][0].moneyLine > 0){

						rev6 = (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2) 
					
					}else if(revWinners[2][0].moneyLine < 0 && revWinners[3][0].moneyLine < 0){

						rev6 = this.sportsBets[i].amount * 4
					
					}else if(revWinners[2][0].moneyLine < 0 && revWinners[3][0].moneyLine > 0){

						rev6 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2)
					
					}else{

						rev6 = (this.sportsBets[i].amount * 2) + (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2)
					}

				}else if(revWinners[2][2] == "sides"){

					if(revWinners[2][0].moneyLine > 0){

						rev6 = (this.sportsBets[i].amount * (revWinners[2][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev6 = this.sportsBets[i].amount * 4

					}
				
				}else if(revWinners[3][2] == "sides"){

					if(revWinners[3][0].moneyLine > 0){

						rev6 = (this.sportsBets[i].amount * (revWinners[3][0].moneyLine/100) * 2) + (this.sportsBets[i].amount * 2)

					}else{

						rev6 = this.sportsBets[i].amount * 4

					}

				}else{

					rev6 = this.sportsBets[i].amount * 4

				}

				this.bankroll = this.bankroll + rev1 + rev2 + rev3 + rev4 + rev5 + rev6


			}		

			if(parlayLosers.length > 0){

			this.bankroll -= this.sportsBets[i].amount
					
			}

			if(parlayLosers.length == 0 && parlayWinners.length == 1){

				if(parlayWinners[0][1][0] == "U" || parlayWinners[0][1][0] == "O" || parlayWinners[0][0].spread){

					this.bankroll += this.sportsBets[i].amount
			
				}else{

					if(parlayWinners[0][2] == "sides"){

						if(parlayWinners[0][0].moneyLine > 0){

							this.bankroll = this.bankroll + (this.sportsBets[i].amount * (parlayWinners[0][0].moneyLine/100))
						
						}else{

							this.bankroll += this.sportsBets[i].amount
						}

					}
				}

			
			}else if(parlayLosers.length == 0 && parlayWinners.length == 2){

				var parOdds1;
				var parOdds2;

				if(parlayWinners[0][2] == "sides"){

					if(parlayWinners[0][0].moneyLine > 0){

						parOdds1 = (parlayWinners[0][0].moneyLine/100) + 1
					
					}else{

						parOdds1 = (100/Math.abs(parlayWinners[0][0].moneyLine)) + 1
					}
				
				}else{

					parOdds1 = 1.55
				}

				if(parlayWinners[1][2] == "sides"){

					if(parlayWinners[1][0].moneyLine > 0){

						parOdds2 = (parlayWinners[1][0].moneyLine/100) + 1
					
					}else{

						parOdds2 = (100/Math.abs(parlayWinners[1][0].moneyLine)) + 1
					}
				
				}else{

					parOdds2 = 1.55
				}

				this.bankroll = this.bankroll + (this.sportsBets[i].amount * parOdds1 * parOdds2)

			
			}else if(parlayLosers.length == 0 && parlayWinners.length == 3){

				var parOdds1;
				var parOdds2;
				var parOdds3;

				if(parlayWinners[0][2] == "sides"){

					if(parlayWinners[0][0].moneyLine > 0){

						parOdds1 = (parlayWinners[0][0].moneyLine/100) + 1
					
					}else{

						parOdds1 = (100/Math.abs(parlayWinners[0][0].moneyLine)) + 1
					}
				
				}else{

					parOdds1 = 1.7
				}

				if(parlayWinners[1][2] == "sides"){

					if(parlayWinners[1][0].moneyLine > 0){

						parOdds2 = (parlayWinners[1][0].moneyLine/100) + 1
					
					}else{

						parOdds2 = (100/Math.abs(parlayWinners[1][0].moneyLine)) + 1
					}
				
				}else{

					parOdds2 = 1.7
				}

				if(parlayWinners[2][2] == "sides"){

					if(parlayWinners[2][0].moneyLine > 0){

						parOdds3 = (parlayWinners[2][0].moneyLine/100) + 1
					
					}else{

						parOdds3 = (100/Math.abs(parlayWinners[2][0].moneyLine)) + 1
					}
				
				}else{

					parOdds3 = 1.7
				}

				this.bankroll = this.bankroll + (this.sportsBets[i].amount * parOdds1 * parOdds2 * parOdds3)

			}else if(parlayLosers.length == 0 && parlayWinners.length == 4){

				var parOdds1;
				var parOdds2;
				var parOdds3;
				var parOdds4;

				if(parlayWinners[0][2] == "sides"){

					if(parlayWinners[0][0].moneyLine > 0){

						parOdds1 = (parlayWinners[0][0].moneyLine/100) + 1
					
					}else{

						parOdds1 = (100/Math.abs(parlayWinners[0][0].moneyLine)) + 1
					}
				
				}else{

					parOdds1 = 1.78
				}

				if(parlayWinners[1][2] == "sides"){

					if(parlayWinners[1][0].moneyLine > 0){

						parOdds2 = (parlayWinners[1][0].moneyLine/100) + 1
					
					}else{

						parOdds2 = (100/Math.abs(parlayWinners[1][0].moneyLine)) + 1
					}
				
				}else{

					parOdds2 = 1.78
				}

				if(parlayWinners[2][2] == "sides"){

					if(parlayWinners[2][0].moneyLine > 0){

						parOdds3 = (parlayWinners[2][0].moneyLine/100) + 1
					
					}else{

						parOdds3 = (100/Math.abs(parlayWinners[2][0].moneyLine)) + 1
					}
				
				}else{

					parOdds3 = 1.78
				}

				if(parlayWinners[3][2] == "sides"){

					if(parlayWinners[3][0].moneyLine > 0){

						parOdds4 = (parlayWinners[3][0].moneyLine/100) + 1
					
					}else{

						parOdds4 = (100/Math.abs(parlayWinners[3][0].moneyLine)) + 1
					}
				
				}else{

					parOdds4 = 1.78
				}


				this.bankroll = this.bankroll + (this.sportsBets[i].amount * parOdds1 * parOdds2 * parOdds3 * parOdds4)

			}else if(parlayLosers.length == 0 && parlayWinners.length == 5){

				var parOdds1;
				var parOdds2;
				var parOdds3;
				var parOdds4;
				var parOdds5;

				if(parlayWinners[0][2] == "sides"){

					if(parlayWinners[0][0].moneyLine > 0){

						parOdds1 = (parlayWinners[0][0].moneyLine/100) + 1
					
					}else{

						parOdds1 = (100/Math.abs(parlayWinners[0][0].moneyLine)) + 1
					}
				
				}else{

					parOdds1 = 1.82
				}

				if(parlayWinners[1][2] == "sides"){

					if(parlayWinners[1][0].moneyLine > 0){

						parOdds2 = (parlayWinners[1][0].moneyLine/100) + 1
					
					}else{

						parOdds2 = (100/Math.abs(parlayWinners[1][0].moneyLine)) + 1
					}
				
				}else{

					parOdds2 = 1.82
				}

				if(parlayWinners[2][2] == "sides"){

					if(parlayWinners[2][0].moneyLine > 0){

						parOdds3 = (parlayWinners[2][0].moneyLine/100) + 1
					
					}else{

						parOdds3 = (100/Math.abs(parlayWinners[2][0].moneyLine)) + 1
					}
				
				}else{

					parOdds3 = 1.82
				}

				if(parlayWinners[3][2] == "sides"){

					if(parlayWinners[3][0].moneyLine > 0){

						parOdds4 = (parlayWinners[3][0].moneyLine/100) + 1
					
					}else{

						parOdds4 = (100/Math.abs(parlayWinners[3][0].moneyLine))+ 1
					}
				
				}else{

					parOdds4 = 1.82
				}

				if(parlayWinners[4][2] == "sides"){

					if(parlayWinners[4][0].moneyLine > 0){

						parOdds5 = (parlayWinners[4][0].moneyLine/100) + 1
					
					}else{

						parOdds5 = (100/Math.abs(parlayWinners[4][0].moneyLine))+ 1
					}
				
				}else{

					parOdds5 = 1.82
				}

				this.bankroll = this.bankroll + (this.sportsBets[i].amount * parOdds1 * parOdds2 * parOdds3 * parOdds4 * parOdds5)

			}
		}
	console.log(this.bankroll)
	}


}


var client1;
var client2;

function setTrial(){
	console.log("in function")

	// 

	setMatchups()
	// createMoneyLineMatchup(Phillies, Mets, 125, 9)
	
	client1 = new ClientObj()

	clientPicks()

	client1.genWager()
	client1.genWager()
	client1.genWager()

	addScores()

	for(i=0; i<client1.sportsBets.length; i++){

		console.log("in for loop")

		var betTitle = document.createElement("DIV")
		betTitle.style.height = "20px"
		betTitle.style.width = "150px"
		betTitle.style.fontSize = "15px"
		
		betTitle.innerHTML = "$" + client1.sportsBets[i].amount + " " + client1.sportsBets[i].type
		document.body.appendChild(betTitle)

		if(client1.sportsBets[i].type == "straight"){

			var solo = document.createElement("DIV")
			solo.style.height = "30px"
			solo.style.width = "150px"
			solo.style.fontSize = "15px"
			solo.innerHTML = client1.sportsBets[i].teams[0][1]
			document.body.appendChild(solo)
		
		}else{

			for(t=0; t<client1.sportsBets[i].teams[0].length; t++){

				var team = document.createElement("DIV")
			
				team.style.height = "30px"
				team.style.width = "150px"
				team.style.fontSize = "15px"	
			
				team.innerHTML = client1.sportsBets[i].teams[0][t][1]
				document.body.appendChild(team)
			
			}
			
			
		}
	}

}

function addScores(){

		Celtics.score = 100
		Celtics.oppScore = 105
		Sixers.score = 100
		Sixers.oppScore = 105
		Knicks.score = 105
		Knicks.oppScore = 105
		Hawks.score = 105
		Hawks.oppScore = 100
		Jazz.score = 104
		Jazz.oppScore = 99
		Heat.score = 100
		Heat.oppScore = 105
		Raptors.score = 111
		Raptors.oppScore = 89
		Jazz.score = 108
		Jazz.oppScore = 110
		Jazz.score = 108
		Jazz.oppScore = 110
		Hornets.score = 108
		Hornets.oppScore = 110
		Nets.score = 108
		Nets.oppScore = 110
		Nuggets.score = 108
		Nuggets.oppScore = 110
		// Phillies.score = 5
		// Phillies.oppScore = 3
		// Mets.score = 1
		// Mets.oppScore = 3

	}





function randomBR(min,max){
    
    return Math.floor(Math.random()*(max-min+1)+min);
}


function parlayCalc2(spread1, spread2, amount){

	if(spread1 < 0){

		var parOdds1 = 100/Math.abs(spread1) + 1
	
	}else{

		var parOdds1 = spread1/100 + 1
	}

	if(spread2 < 0){

		var parOdds2 = 100/Math.abs(spread2) + 1
	
	}else{

		var parOdds2 = spread2/100 + 1
	}

	var totalOdds = parOdds1 * parOdds2

	var payout = amount * totalOdds

	return [totalOdds, amount, payout]

}

function parlayCalc3(spread1, spread2, spread3, amount){

	if(spread1 < 0){

		var parOdds1 = 100/Math.abs(spread1) + 1
	
	}else{

		var parOdds1 = spread1/100 + 1
	}

	if(spread2 < 0){

		var parOdds2 = 100/Math.abs(spread2) + 1
	
	}else{

		var parOdds2 = spread2/100 + 1
	}

	if(spread3 < 0){

		var parOdds3 = 100/Math.abs(spread3) + 1
	
	}else{

		var parOdds3 = spread3/100 + 1
	}

	var totalOdds = parOdds1 * parOdds2 * parOdds3

	var payout = amount * totalOdds

	return [totalOdds, amount, payout]
}

function parlayCalc4(spread1, spread2, spread3, spread4, amount){

	if(spread1 < 0){

		var parOdds1 = 100/Math.abs(spread1) + 1
	
	}else{

		var parOdds1 = spread1/100 + 1
	}

	if(spread2 < 0){

		var parOdds2 = 100/Math.abs(spread2) + 1
	
	}else{

		var parOdds2 = spread2/100 + 1
	}

	if(spread3 < 0){

		var parOdds3 = 100/Math.abs(spread3) + 1
	
	}else{

		var parOdds3 = spread3/100 + 1
	}

	if(spread4 < 0){

		var parOdds4 = 100/Math.abs(spread4) + 1
	
	}else{

		var parOdds4 = spread4/100 + 1
	}

	var totalOdds = parOdds1 * parOdds2 * parOdds3 * parOdds4

	var payout = amount * totalOdds

	return [totalOdds, amount, payout]
}

function parlayCalc5(spread1, spread2, spread3, spread4, spread5, amount){

	if(spread1 < 0){

		var parOdds1 = 100/Math.abs(spread1) + 1
	
	}else{

		var parOdds1 = spread1/100 + 1
	}

	if(spread2 < 0){

		var parOdds2 = 100/Math.abs(spread2) + 1
	
	}else{

		var parOdds2 = spread2/100 + 1
	}

	if(spread3 < 0){

		var parOdds3 = 100/Math.abs(spread3) + 1
	
	}else{

		var parOdds3 = spread3/100 + 1
	}

	if(spread4 < 0){

		var parOdds4 = 100/Math.abs(spread4) + 1
	
	}else{

		var parOdds4 = spread4/100 + 1
	}

	if(spread5 < 0){

		var parOdds5 = 100/Math.abs(spread5) + 1
	
	}else{

		var parOdds5 = spread5/100 + 1
	}


	var totalOdds = parOdds1 * parOdds2 * parOdds3 * parOdds4 * parOdds5

	var payout = amount * totalOdds

	return [totalOdds, amount, payout]
}


function createSpreadMatchup(sport, fav, dog, spread, totalLine){


	fav.opp = dog
	fav.spread = 0 - spread
	dog.opp = fav
	dog.spread = spread
	fav.total = totalLine 
	dog.total = totalLine 

	var gameMatchup = {

		favorite: fav.teamName + " " + fav.spread,
		underdog: dog.teamName + " " + "+" + dog.spread,
		favTeam: fav,
		dogTeam: dog


	}

	var totalsMatchup = {

		overs: "Over " + fav.teamName + " " + totalLine,
		unders: "Under " + dog.teamName + " " + totalLine,
		ovTeam: fav,
		unTeam: dog	


	}

	if(sport == "NBA"){

		nbaBettingOpt.push(gameMatchup)
		nbaTotalsOpt.push(totalsMatchup)
	}

}

function clientPicks(){

	for(i=0; i<mlbSides.length; i++){

		let x = randomBR(1, 2)

		if(x == 1){

			let z = [mlbSides[i].favTeam, mlbSides[i].favorite, "sides"]

			clientOpp.push(z)

		}else{

			let z = [mlbSides[i].dogTeam, mlbSides[i].underdog, "sides"]

			clientOpp.push(z)

		}
	}

	for(i=0; i<mlbTotals.length; i++){

		let y = randomBR(1, 2)

		if(y == 1){

			let z = [mlbTotals[i].ovTeam, mlbTotals[i].overs]

			clientOpp.push(z)

		}else{

			let z = [mlbTotals[i].unTeam, mlbTotals[i].unders]

			clientOpp.push(z)

		}

	}

	for(i=0; i<nbaBettingOpt.length; i++){

		let a = randomBR(1, 2)

		if(a == 1){

			let z = [nbaBettingOpt[i].favTeam, nbaBettingOpt[i].favorite]

			clientOpp.push(z)
		
		}else{

			let z = [nbaBettingOpt[i].dogTeam, nbaBettingOpt[i].underdog]

			clientOpp.push(z)
		}
	}

	for(i=0; i<nbaTotalsOpt.length; i++){

		let a = randomBR(1, 2)

		if(a == 1){

			let z = [nbaTotalsOpt[i].ovTeam, nbaTotalsOpt[i].overs]

			clientOpp.push(z)
		
		}else{

			let z = [nbaTotalsOpt[i].unTeam, nbaTotalsOpt[i].unders]

			clientOpp.push(z)
		}
	}
}

function setMatchups(){

	createSpreadMatchup("NBA", Celtics, Hawks, 5, 200)
	createSpreadMatchup("NBA", Sixers, Knicks, 2, 189)
	createSpreadMatchup("NBA", Jazz, Raptors, 9, 212)
	createSpreadMatchup("NBA", Hornets, Nets, 4.5, 199.5)
	createSpreadMatchup("NBA", Nuggets, Heat, 1, 205)
}

var Celtics = new SpreadTeam("Celtics", "Boston", "NBA")
var Hawks = new SpreadTeam("Hawks", "Atlanta", "NBA")
var Sixers = new SpreadTeam("76ers", "Philly", "NBA")
var Knicks = new SpreadTeam("Knicks", "New York", "NBA")
var Jazz = new SpreadTeam("Jazz", "Utah", "NBA")
var Raptors = new SpreadTeam("Raptors", "Toronto", "NBA")
var Hornets = new SpreadTeam("Hornets", "Charlotte", "NBA")
var Nets = new SpreadTeam("Nets", "Brooklyn", "NBA")
var Nuggets = new SpreadTeam("Nuggets", "Denver", "NBA")
var Heat = new SpreadTeam("Heat", "Miami", "NBA")




function SpreadTeam (teamName, city, sport){
	
	this.teamName = teamName
	this.city = city
	this.sport = sport
	this.startTime = 0
	this.opp = "none"
	this.spread = 0
	this.score = 0
	this.oppScore = 0
	
	if(this.sport == "NFL" || this.sport == "CFB"){

		this.twoTeamTeaser = function(){

			x = this.spread + 6.5
			return x
		}
		this.threeTeamTeaser = function(){

			x = this.spread + 9.5
			return x

		}
		this.fiveTeamTeaser = function(){

			x = this.spread + 6.5
			return x
		}
	
	}else{

		this.twoTeamTeaser = function(){

			x = this.spread + 4.5
			return x
		}
		this.threeTeamTeaser = function(){

			x = this.spread + 6.5
			return x

		}
		this.fiveTeamTeaser = function(){

			x = this.spread + 4.5
			return x
		}
	}
	
	this.gradeGame = function(){

		if(this.score + this.spread > this.oppScore){

			this.spreadResult = "win"
		
		}else if (this.score + this.spread < this.oppScore){

			this.spreadResult = "loss"
		
		}else{

			this.spreadResult = "push"
		}

		if(this.score + this.twoTeamTeaser() > this.oppScore){

			this.twoTResult = "win"
		
		}else if(this.score + this.twoTeamTeaser() < this.oppScore){

			this.twoTResult = "loss"
		
		}else{

			this.twoTResult = "push"
		}

		if(this.score + this.threeTeamTeaser() > this.oppScore){

			this.threeTResult = "win"
		
		}else if(this.score + this.twoTeamTeaser() < this.oppScore){

			this.threeTResult = "loss"
		
		}else{

			this.threeTResult = "push"
		}

		if(this.score + this.fiveTeamTeaser() > this.oppScore){

			this.fiveTResult = "win"
		
		}else if(this.score + this.fiveTeamTeaser() < this.oppScore){

			this.fiveTResult = "loss"
		
		}else{

			this.fiveTResult = "push"
		}

	}

	this.total = 0

	if(this.sport == "NFL" || this.sport == "CFB"){
	
		this.overTwoTeamTotal = function(){

			var overT = this.total - 6.5

			return overT
		}

		this.underTwoTeamTotal = function(){

			var underT = this.total + 6.5

			return underT
		}

		this.overThreeTeamTotal = function(){

			var overT = this.total - 9.5
			return overT
		}

		this.underThreeTeamTotal = function(){

			var underT = this.total + 9.5
			return underT
		}

		this.overFiveTeamTotal = function(){

			var overT = this.total - 6.5
			return overT
		}

		this.underFiveTeamTotal = function(){

			var underT = this.total + 6.5
			return underT
		}

		this.ovTwoTTotalR = function(){

			if(this.pointsScored() > this.overTwoTeamTotal()){

				var twoTR = "win"
			
			}else if(this.pointsScored() == this.overTwoTeamTotal()){

				var twoTR = "push"
			}else{

				var twoTR = "loss"
			}
			return twoTR
		}

		this.unTwoTTotalR = function(){

			if(this.pointsScored() < this.underTwoTeamTotal()){

				var twoTR = "win"
			
			}else if(this.pointsScored() == this.underTwoTeamTotal()){

				var twoTR = "push"
			}else{

				var twoTR = "loss"
			}
			return twoTR
		}

		this.unThreeTTotalR = function(){

			if(this.pointsScored() < this.underThreeTeamTotal()){

				var threeTR = "win"
			
			}else if(this.pointsScored() == this.underThreeTeamTotal()){

				var threeTR = "push"
			}else{

				var threeTR = "loss"
			}
			return threeTR
		}

		this.ovThreeTTotalR = function(){

			if(this.pointsScored() > this.overThreeTeamTotal()){

				var threeTR = "win"
			
			}else if(this.pointsScored() == this.overThreeTeamTotal()){

				var threeTR = "push"
			}else{

				var threeTR = "loss"
			}
			return threeTR
		}

		this.ovFiveTTotalR = function(){

			if(this.pointsScored() > this.overFiveTeamTotal()){

				var fiveTR = "win"
			
			}else if(this.pointsScored() == this.overFiveTeamTotal()){

				var fiveTR = "push"
			}else{

				var fiveTR = "loss"
			}
			return fiveTR
		}

		this.unFiveTTotalR = function(){

			if(this.pointsScored() < this.underFiveTeamTotal()){

				var fiveTR = "win"
			
			}else if(this.pointsScored() == this.underFiveTeamTotal()){

				var fiveTR = "push"
			}else{

				var fiveTR = "loss"
			}
			return fiveTR
		}

		this.pointsScored = function(){

			var totalPoints = this.score + this.oppScore

			return totalPoints
		}

		this.totalResult = function(){

			if(this.pointsScored() > this.total){

				var tResult = "Over"
			
			}else if(this.pointsScored() == this.total){

				var tResult = "Push"
			
			}else{

				var tResult =  "Under"
			}
			return tResult
		}

	}else{

		this.overTwoTeamTotal = function(){

			var overT = this.total - 4.5

			return overT
		}

		this.underTwoTeamTotal = function(){

			var underT = this.total + 4.5

			return underT
		}

		this.overThreeTeamTotal = function(){

			var overT = this.total - 6.5
			return overT
		}

		this.underThreeTeamTotal = function(){

			var underT = this.total + 6.5
			return underT
		}

		this.overFiveTeamTotal = function(){

			var overT = this.total - 4.5
			return overT
		}

		this.underFiveTeamTotal = function(){

			var underT = this.total + 4.5
			return underT
		}

		this.ovTwoTTotalR = function(){

			if(this.pointsScored() > this.overTwoTeamTotal()){

				var twoTR = "win"
			
			}else if(this.pointsScored() == this.overTwoTeamTotal()){

				var twoTR = "push"
			}else{

				var twoTR = "loss"
			}
			return twoTR
		}

		this.unTwoTTotalR = function(){

			if(this.pointsScored() < this.underTwoTeamTotal()){

				var twoTR = "win"
			
			}else if(this.pointsScored() == this.underTwoTeamTotal()){

				var twoTR = "push"
			}else{

				var twoTR = "loss"
			}
			return twoTR
		}

		this.unThreeTTotalR = function(){

			if(this.pointsScored() < this.underThreeTeamTotal()){

				var threeTR = "win"
			
			}else if(this.pointsScored() == this.underThreeTeamTotal()){

				var threeTR = "push"
			}else{

				var threeTR = "loss"
			}
			return threeTR
		}

		this.ovThreeTTotalR = function(){

			if(this.pointsScored() > this.overThreeTeamTotal()){

				var threeTR = "win"
			
			}else if(this.pointsScored() == this.overThreeTeamTotal()){

				var threeTR = "push"
			}else{

				var threeTR = "loss"
			}
			return threeTR
		}

		this.ovFiveTTotalR = function(){

			if(this.pointsScored() > this.overFiveTeamTotal()){

				var fiveTR = "win"
			
			}else if(this.pointsScored() == this.overFiveTeamTotal()){

				var fiveTR = "push"
			}else{

				var fiveTR = "loss"
			}
			return fiveTR
		}

		this.unFiveTTotalR = function(){

			if(this.pointsScored() < this.underFiveTeamTotal()){

				var fiveTR = "win"
			
			}else if(this.pointsScored() == this.underFiveTeamTotal()){

				var fiveTR = "push"
			}else{

				var fiveTR = "loss"
			}
			return fiveTR
		}

		this.pointsScored = function(){

			var totalPoints = this.score + this.oppScore

			return totalPoints
		}

		this.totalResult = function(){

			if(this.pointsScored() > this.total){

				var tResult = "Over"
			
			}else if(this.pointsScored() == this.total){

				var tResult = "Push"
			
			}else{

				var tResult =  "Under"
			}
			return tResult
		}

	}

}

var mlbSides = []
var mlbTotals = []
var Phillies = new MoneyLineTeam("Phillies", "Philly", "MLB")
var Mets = new MoneyLineTeam("Mets", "NY", "MLB")

function createMoneyLineMatchup(fav, dog, moneyLine, total){

	fav.opp = dog
	fav.moneyLine = 0 - moneyLine
	dog.opp = fav
	dog.moneyLine = moneyLine
	fav.total = total 
	dog.total = total

	var gameMatchup = {

		favorite: fav.teamName + " " + fav.moneyLine,
		underdog: dog.teamName + " " + "+" + dog.moneyLine,
		favTeam: fav,
		dogTeam: dog


	}

	var totalsMatchup = {

		overs: "Over " + fav.teamName + " " + total,
		unders: "Under " + dog.teamName + " " + total,
		ovTeam: fav,
		unTeam: dog	


	}

	mlbSides.push(gameMatchup)
	mlbTotals.push(totalsMatchup)
}

function MoneyLineTeam (teamName, city, sport){

	this.teamName = teamName
	this.city = city
	this.sport = sport
	this.startTime = 0
	this.opp = "none"
	this.moneyLine = 0
	this.score = 0
	this.oppScore = 0
	
	this.gradeGame = function(){

		if(this.score > this.oppScore){

			this.result = "win"
		
		}else if(this.score < this.oppScore){

			this.result = "loss"
		
		}else{

			this.result = "push"
		}
	}

	this.total = 0
	this.pointsScored = function(){

		var totalPoints = this.score + this.oppScore

		return totalPoints
	}

	this.totalResult = function(){

		if(this.pointsScored() > this.total){

			var tResult = "Over"
		
		}else if(this.pointsScored() == this.total){

			var tResult = "Push"
		
		}else if(this.pointsScored() < this.total){

			var tResult =  "Under"
		}else{

			var tResult = "No Result"
		}
		return tResult
	}
	
}


