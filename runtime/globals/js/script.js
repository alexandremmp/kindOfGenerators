const titleEuroM = document.querySelector('.title-em');
const titleTot = document.querySelector('.title-t');
const numbersEuroM = document.querySelector('.numbers-em');
const starsEuroM = document.querySelector('.stars-em');
const numbersTot = document.querySelector('.numbers-t');
const supTot = document.querySelector('.sup-t');

titleEuroM.textContent = 'Euromillion Key Generator';
titleTot.textContent = 'Totoloto Key Generator';

// generate euromillion key
function getEKey() {
	var numbersEM = [];
	var starsEM = [];

	// generate numbers
	function newNumber() {
		let result = Math.floor(Math.random() * 50) + 1;
		if (numbersEM.includes(result)) {
			return newNumber();
		}
		numbersEM.push(result);
	}

	for (let i = 0; i < 5; i++) {
		newNumber();
	}

	// generate stars
	function newStar() {
		let result = Math.floor(Math.random() * 12) + 1;
		if (starsEM.includes(result)) {
			return newStar();
		}
		starsEM.push(result);
	}

	for (let i = 0; i < 2; i++) {
		newStar();
	}

	numbersEM = numbersEM.sort((a, b) => a - b);
	starsEM = starsEM.sort((a, b) => a - b);

	// populate div
	if (numbersEuroM && starsEuroM) {
		numbersEuroM.innerHTML = numbersEM.map((n, nIndex) => {
			return `
				<div key="${nIndex}" class="single-number">${n}</div>
			`
		}).join('');

		starsEuroM.innerHTML = starsEM.map((s, sIndex) => {
			return `
				<div key="${sIndex}" class="single-number star-number">${s}</div>
			`
		}).join('');
	}
}

// generate totoloto key
function getTKey() {
	var numbersT = [];
	var supT = [];

	// generate numbers
	function newNumber() {
		let result = Math.floor(Math.random() * 49) + 1;
		if (numbersT.includes(result)) {
			return newNumber();
		}
		numbersT.push(result);
	}

	for (let i = 0; i < 5; i++) {
		newNumber();
	}

	// generate sups
	function newSup() {
		let result = Math.floor(Math.random() * 11) + 1;
		if (supT.includes(result)) {
			return newSup();
		}
		supT.push(result);
	}

	for (let i = 0; i < 1; i++) {
		newSup();
	}

	numbersT = numbersT.sort((a, b) => a - b);
	supT = supT.sort((a, b) => a - b);

	// populate div
	if (numbersTot && supTot) {
		numbersTot.innerHTML = numbersT.map((n, nIndex) => {
			return `
				<div key="${nIndex}" class="single-number">${n}</div>
			`
		}).join('');

		supTot.innerHTML = supT.map((s, sIndex) => {
			return `
				<div key="${sIndex}" class="single-number sup-number">${s}</div>
			`
		}).join('');
	}
}

getEKey();
getTKey();
