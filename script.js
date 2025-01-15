let scores = {
	computerScore: 0,
	yourScore: 0,
	won: ""
}

localStorage.setItem("scores", JSON.stringify(scores));

document.querySelector(".rules-button").addEventListener("click", function () {
	const card = document.querySelector(".rules");
	card.style.display = card.style.display === "none" || card.style.display === "" ? "block" : "none";

});
document.querySelector(".cross-button").addEventListener("click", function () {
	const card = document.querySelector(".rules");
	card.style.display = "none";
})

document.querySelector(".rock").addEventListener("click", function () {
	const triangleContainer = document.querySelector(".triangle-container");
	const centeringTopTwo = document.querySelector(".centering-top-two");
	const winning = document.querySelector(".winning");


	triangleContainer.style.display = "none";
	winning.style.display = "none";
	centeringTopTwo.style.display = "flex";

	const randomNumber = Math.floor(Math.random() * 3) + 1;
	console.log("Computer Number : ", randomNumber);
	console.log("Humar Number : ", "1");

	// Select the element with both `circletwo` and `papertwo` classes
	const computerSelected = document.querySelector(".circletwo");
	const computerSelectedImg = computerSelected.querySelector(".icon img");

	computerSelected.classList.remove("papertwo", "scissorstwo", "rocktwo");

	const humanSelected = document.querySelector(".circletwohuman");
	humanSelected.classList.remove("papertwo", "scissorstwo", "rocktwo");
	humanSelected.classList.add("rocktwo");
	const humanSelectedImg = humanSelected.querySelector(".icon img");
	humanSelectedImg.src = './Assets/rock.png';

	// Replace `papertwo` with `rocktwo` while keeping `circletwo`
	let computerChoice = "";

	if (randomNumber === 1) {
		computerSelected.classList.add("rocktwo");
		computerSelectedImg.src = "./Assets/rock.png";
		computerChoice = "rock";
	} else if (randomNumber === 2) {
		computerSelected.classList.add("papertwo");
		computerSelectedImg.src = './Assets/paper.png';
		computerChoice = "paper"
	} else if (randomNumber === 3) {
		computerSelected.classList.add("scissorstwo");
		computerSelectedImg.src = './Assets/scissors.png';
		computerChoice = "scissors";
	}

	let retrievedScores = JSON.parse(localStorage.getItem("scores"));
	console.log(retrievedScores)

	let result = "";
	if (computerChoice === "rock") {
		result = "Draw!";
	} else if (computerChoice === "paper") {
		result = "YOU LOST";
		retrievedScores.computerScore++
	} else if (computerChoice === "scissors") {
		result = "YOU WIN";
		retrievedScores.yourScore++
	}

	retrievedScores.won = result;


	// Save the updated scores back to localStorage
	localStorage.setItem("scores", JSON.stringify(retrievedScores));
	console.log("Updated Scores:", retrievedScores);

	let computerScore = document.querySelector(".computerscore");
	computerScore.innerHTML = retrievedScores.computerScore;
	let humanScore = document.querySelector(".humanscore");
	humanScore.innerHTML = retrievedScores.yourScore;
	let winningText = document.querySelector(".win-lose-text p");
	winningText.innerHTML = retrievedScores.won;

	if (retrievedScores.won === "YOU LOST") {
		if (randomNumber === 1) {
			let successBorder = document.querySelector(".rocktwo");
			successBorder.style.boxShadow = `
					0 0 0 10px rgba(0, 128, 0, 0.8),
					0 0 0 20px rgba(0, 128, 0, 0.6),
					0 0 0 30px rgba(0, 128, 0, 0.4), 
					0 0 0 40px rgba(0, 128, 0, 0.2)
			`;
		} else if (randomNumber === 2) {
			let successBorder = document.querySelector(".papertwo");
			successBorder.style.boxShadow = `
					0 0 0 10px rgba(0, 128, 0, 0.8),
					0 0 0 20px rgba(0, 128, 0, 0.6),
					0 0 0 30px rgba(0, 128, 0, 0.4), 
					0 0 0 40px rgba(0, 128, 0, 0.2)
			`;
		} else if (randomNumber === 3) {
			let successBorder = document.querySelector(".scissorstwo");
			successBorder.style.boxShadow = `
					0 0 0 10px rgba(0, 128, 0, 0.8),
					0 0 0 20px rgba(0, 128, 0, 0.6),
					0 0 0 30px rgba(0, 128, 0, 0.4), 
					0 0 0 40px rgba(0, 128, 0, 0.2)
			`;
		}
	} else if (retrievedScores.won === "YOU WIN") {
		let successBorder = document.querySelector(".rocktwo");
		successBorder.style.boxShadow = `
				0 0 0 10px rgba(0, 128, 0, 0.8),
				0 0 0 20px rgba(0, 128, 0, 0.6),
				0 0 0 30px rgba(0, 128, 0, 0.4), 
				0 0 0 40px rgba(0, 128, 0, 0.2)
		`;

		setTimeout(() => {
			let top = document.querySelector(".centering-top");
			top.style.display = "none";

			const centeringTopTwo = document.querySelector(".centering-top-two");
			centeringTopTwo.style.display = "none";

			const winning = document.querySelector(".winning");
			winning.style.display = "flex";

			// let main = document.querySelector(".main");
			// main.style.backGroundImage.src = "./Assets/winning.png"
		}, 1000)
	} else if (retrievedScores.won === "Draw!") {
		let successBorder = document.querySelector(".scissorstwo");
		successBorder.style.boxShadow = "none";
	} else {
		console.log("Drwa!!!")
	}
})

document.querySelector(".paper").addEventListener("click", function () {

	const triangleContainer = document.querySelector(".triangle-container");
	const centeringTopTwo = document.querySelector(".centering-top-two");
	const winning = document.querySelector(".winning");

	triangleContainer.style.display = "none";

	centeringTopTwo.style.display = "flex";

	winning.style.display = "none"

	const randomNumber = Math.floor(Math.random() * 3) + 1;
	console.log("Computer Number : ", randomNumber);
	console.log("Humar Number : ", "2");
	// Select the element with both `circletwo` and `papertwo` classes
	const computerSelected = document.querySelector(".circletwo");
	const computerSelectedImg = computerSelected.querySelector(".icon img");

	computerSelected.classList.remove("papertwo", "scissorstwo", "rocktwo");

	const humanSelected = document.querySelector(".circletwohuman");
	humanSelected.classList.remove("papertwo", "scissorstwo", "rocktwo");
	humanSelected.classList.add("papertwo");
	const humanSelectedImg = humanSelected.querySelector(".icon img");
	humanSelectedImg.src = './Assets/paper.png';






	// humanSelected.classList.replace("rocktwo", "papertwo");


	// Replace `papertwo` with `rocktwo` while keeping `circletwo`
	let computerChoice = "";

	if (randomNumber === 1) {
		computerSelected.classList.add("rocktwo");
		computerSelectedImg.src = "./Assets/rock.png";
		computerChoice = "rock"
	} else if (randomNumber === 2) {
		computerSelected.classList.add("papertwo");
		computerSelectedImg.src = './Assets/paper.png';
		computerChoice = "paper"
	} else if (randomNumber === 3) {
		computerSelected.classList.add("scissorstwo");
		computerSelectedImg.src = './Assets/scissors.png';
		computerChoice = "scissors";
	}

	let retrievedScores = JSON.parse(localStorage.getItem("scores"));
	console.log(retrievedScores)

	// Determine the result
	let result = "";
	if (computerChoice === "rock") {
		result = "YOU WIN";
		retrievedScores.yourScore++
	} else if (computerChoice === "paper") {
		result = "Draw!";
	} else if (computerChoice === "scissors") {
		result = "YOU LOST";
		retrievedScores.computerScore++
	}

	console.log(result);
	retrievedScores.won = result;
	// Save the updated scores back to localStorage
	localStorage.setItem("scores", JSON.stringify(retrievedScores));
	console.log("Updated Scores:", retrievedScores);



	let computerScore = document.querySelector(".computerscore");
	computerScore.innerHTML = retrievedScores.computerScore;

	let humanScore = document.querySelector(".humanscore");
	humanScore.innerHTML = retrievedScores.yourScore;

	let winningText = document.querySelector(".win-lose-text p");
	winningText.innerHTML = retrievedScores.won;



	if (retrievedScores.won === "YOU LOST") {
		if (randomNumber === 1) {
			let successBorder = document.querySelector(".rocktwo");
			successBorder.style.boxShadow = `
					0 0 0 10px rgba(0, 128, 0, 0.8),
					0 0 0 20px rgba(0, 128, 0, 0.6),
					0 0 0 30px rgba(0, 128, 0, 0.4), 
					0 0 0 40px rgba(0, 128, 0, 0.2)
			`;
		} else if (randomNumber === 2) {
			let successBorder = document.querySelector(".papertwo");
			successBorder.style.boxShadow = `
					0 0 0 10px rgba(0, 128, 0, 0.8),
					0 0 0 20px rgba(0, 128, 0, 0.6),
					0 0 0 30px rgba(0, 128, 0, 0.4), 
					0 0 0 40px rgba(0, 128, 0, 0.2)
			`;
		} else if (randomNumber === 3) {
			let successBorder = document.querySelector(".scissorstwo");
			successBorder.style.boxShadow = `
					0 0 0 10px rgba(0, 128, 0, 0.8),
					0 0 0 20px rgba(0, 128, 0, 0.6),
					0 0 0 30px rgba(0, 128, 0, 0.4), 
					0 0 0 40px rgba(0, 128, 0, 0.2)
			`;
		}
	} else if (retrievedScores.won === "YOU WIN") {
		let successBorder = document.querySelector(".papertwo");
		successBorder.style.boxShadow = `
				0 0 0 10px rgba(0, 128, 0, 0.8),
				0 0 0 20px rgba(0, 128, 0, 0.6),
				0 0 0 30px rgba(0, 128, 0, 0.4), 
				0 0 0 40px rgba(0, 128, 0, 0.2)
		`;

		setTimeout(() => {
			let top = document.querySelector(".centering-top");
			top.style.display = "none";

			const centeringTopTwo = document.querySelector(".centering-top-two");
			centeringTopTwo.style.display = "none";

			const winning = document.querySelector(".winning");
			winning.style.display = "flex";

			// let main = document.querySelector(".main");
			// main.style.backGroundImage.src = "./Assets/winning.png"
		}, 1000)

	} else if (retrievedScores.won === "Draw!") {
		let successBorder = document.querySelector(".scissorstwo");
		successBorder.style.boxShadow = "none";
	} else {
		console.log("Drwa!!!")
	}

})

document.querySelector(".scissors").addEventListener("click", function () {
	const triangleContainer = document.querySelector(".triangle-container");
	const centeringTopTwo = document.querySelector(".centering-top-two");

	const winning = document.querySelector(".winning");

	winning.style.display = "none";

	triangleContainer.style.display = "none";
	centeringTopTwo.style.display = "flex";

	const randomNumber = Math.floor(Math.random() * 3) + 1;
	console.log("Computer Number : ", randomNumber);
	console.log("Humar Number : ", "3");


	// Select the element with both `circletwo` and `papertwo` classes
	const computerSelected = document.querySelector(".circletwo");
	const computerSelectedImg = computerSelected.querySelector(".icon img");

	computerSelected.classList.remove("papertwo", "scissorstwo", "rocktwo");



	const humanSelected = document.querySelector(".circletwohuman");
	humanSelected.classList.remove("papertwo", "scissorstwo", "rocktwo");
	humanSelected.classList.add("scissorstwo");
	const humanSelectedImg = humanSelected.querySelector(".icon img");
	humanSelectedImg.src = './Assets/scissors.png';


	// Replace `papertwo` with `rocktwo` while keeping `circletwo`
	let computerChoice = "";

	if (randomNumber === 1) {
		computerSelected.classList.add("rocktwo");
		computerSelectedImg.src = "./Assets/rock.png";
		computerChoice = "rock"
	} else if (randomNumber === 2) {
		computerSelected.classList.add("papertwo");
		computerSelectedImg.src = './Assets/paper.png';
		computerChoice = "paper"
	} else if (randomNumber === 3) {
		computerSelected.classList.add("scissorstwo");
		computerSelectedImg.src = './Assets/scissors.png';
		computerChoice = "scissors"
	}

	let retrievedScores = JSON.parse(localStorage.getItem("scores"));
	console.log(retrievedScores)

	let result = "";
	if (computerChoice === "rock") {
		result = "YOU LOST";
		retrievedScores.computerScore++
	} else if (computerChoice === "paper") {
		result = "YOU WIN";
		retrievedScores.yourScore++
	} else if (computerChoice === "scissors") {
		result = "Draw!";
	}

	console.log(result);

	retrievedScores.won = result;

	// Save the updated scores back to localStorage
	localStorage.setItem("scores", JSON.stringify(retrievedScores));
	console.log("Updated Scores:", retrievedScores);



	let computerScore = document.querySelector(".computerscore");
	computerScore.innerHTML = retrievedScores.computerScore;

	let humanScore = document.querySelector(".humanscore");
	humanScore.innerHTML = retrievedScores.yourScore;

	let winningText = document.querySelector(".win-lose-text p");
	winningText.innerHTML = retrievedScores.won;



	if (retrievedScores.won === "YOU LOST") {
		if (randomNumber === 1) {
			let successBorder = document.querySelector(".rocktwo");
			successBorder.style.boxShadow = `
					0 0 0 10px rgba(0, 128, 0, 0.8),
					0 0 0 20px rgba(0, 128, 0, 0.6),
					0 0 0 30px rgba(0, 128, 0, 0.4), 
					0 0 0 40px rgba(0, 128, 0, 0.2)
			`;
		} else if (randomNumber === 2) {
			let successBorder = document.querySelector(".papertwo");
			successBorder.style.boxShadow = `
					0 0 0 10px rgba(0, 128, 0, 0.8),
					0 0 0 20px rgba(0, 128, 0, 0.6),
					0 0 0 30px rgba(0, 128, 0, 0.4), 
					0 0 0 40px rgba(0, 128, 0, 0.2)
			`;
		} else if (randomNumber === 3) {
			let successBorder = document.querySelector(".scissorstwo");
			successBorder.style.boxShadow = `
					0 0 0 10px rgba(0, 128, 0, 0.8),
					0 0 0 20px rgba(0, 128, 0, 0.6),
					0 0 0 30px rgba(0, 128, 0, 0.4), 
					0 0 0 40px rgba(0, 128, 0, 0.2)
			`;
		}
	} else if (retrievedScores.won === "YOU WIN") {
		let successBorder = document.querySelector(".scissorstwo");
		successBorder.style.boxShadow = `
				0 0 0 10px rgba(0, 128, 0, 0.8),
				0 0 0 20px rgba(0, 128, 0, 0.6),
				0 0 0 30px rgba(0, 128, 0, 0.4), 
				0 0 0 40px rgba(0, 128, 0, 0.2)
		`;

		setTimeout(() => {
			let top = document.querySelector(".centering-top");
			top.style.display = "none";

			const centeringTopTwo = document.querySelector(".centering-top-two");
			centeringTopTwo.style.display = "none";

			const winning = document.querySelector(".winning");
			winning.style.display = "flex";

		}, 1000)
	} else if (retrievedScores.won === "Draw!") {
		let successBorder = document.querySelector(".scissorstwo");
		successBorder.style.boxShadow = "none";
	} else {
		console.log("Drwa!!!")
	}
})



document.querySelector("#play-again").addEventListener("click", function () {

	console.log("Triggering")

	let playagain = document.querySelector(".triangle-container");
	playagain.style.display = "block";

	console.log("Triggering")

	let centeringTopTwo = document.querySelector(".centering-top-two");
	centeringTopTwo.style.display = "none";

	let winning = document.querySelector(".winning");
	winning.style.display = "none";

	let successBorderRock = document.querySelector(".rocktwo");
	let successBorderPaper = document.querySelector(".papertwo");
	let successBorderScissorstwo = document.querySelector(".scissorstwo");
	// successBorderRock.style.boxShadow = "none"
	// successBorderPaper.style.boxShadow = "none"
	// successBorderScissorstwo.style.boxShadow = "none"
	if (successBorderRock) successBorderRock.style.boxShadow = "none";
	if (successBorderPaper) successBorderPaper.style.boxShadow = "none";
	if (successBorderScissorstwo) successBorderScissorstwo.style.boxShadow = "none";


});

document.querySelector("#play-again-two").addEventListener("click", function () {


	let playagain = document.querySelector(".triangle-container");
	playagain.style.display = "block";

	let top = document.querySelector(".centering-top");
	top.style.display = "flex";

	console.log("Triggering")

	let centeringTopTwo = document.querySelector(".centering-top-two");
	centeringTopTwo.style.display = "none";



	let successBorderRock = document.querySelector(".rocktwo");
	let successBorderPaper = document.querySelector(".papertwo");
	let successBorderScissorstwo = document.querySelector(".scissorstwo");
	// successBorderRock.style.boxShadow = "none"
	// successBorderPaper.style.boxShadow = "none"
	// successBorderScissorstwo.style.boxShadow = "none"

	if (successBorderRock) successBorderRock.style.boxShadow = "none";
	if (successBorderPaper) successBorderPaper.style.boxShadow = "none";
	if (successBorderScissorstwo) successBorderScissorstwo.style.boxShadow = "none";

	console.log("Working at end")
	let winning = document.querySelector(".winning");
	winning.style.display = "none";

});



