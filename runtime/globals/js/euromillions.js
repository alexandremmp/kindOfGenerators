var euromillionsNumbers = [];
var euromillionsStars = [];

while (euromillionsNumbers.length < 5) {
	var randomNumber = Math.ceil(Math.random() * 50);
	if (randomNumber == 0) continue;
	var found = false;
	for (var i = 0; i < euromillionsNumbers.length; i++) {
		if (euromillionsNumbers[i] == randomNumber) {
			found = true;
			break
		}
	}
	if (found) continue;
	euromillionsNumbers.push(randomNumber);
}

while (euromillionsStars.length < 2) {
	var randomStar = Math.ceil(Math.random() * 12);
	if (randomStar == 0) continue;
	var found = false;
	for (var i = 0; i < euromillionsStars.length; i++) {
		if (euromillionsStars[i] == randomStar) {
			found = true;
			break
		}
	}
	if (found) continue;
	euromillionsStars.push(randomStar);
}

euromillionsNumbers = euromillionsNumbers.sort(function(a, b) {
	return a - b
});

euromillionsStars = euromillionsStars.sort(function(a, b) {
	return a - b
});

for (var i = 0; i < euromillionsNumbers.length; i++) {
	var currentEuroNumbers = $('#euromillionsNumbers').html();
	var newEuroNumbers = currentEuroNumbers + '<span class="number">' + euromillionsNumbers[i] + '</span>';
	$('#euromillionsNumbers').html(newEuroNumbers);
}

for (var i = 0; i < euromillionsStars.length; i++) {
	var currentStars = $('#euromillionsStars').html();
	var newStars = currentStars + '<span class="star">' + euromillionsStars[i] + '</span>';
	$('#euromillionsStars').html(newStars);
}
