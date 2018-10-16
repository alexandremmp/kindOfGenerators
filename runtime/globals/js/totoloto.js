var totolotoNumbers = []
var supTotoloto = []

while (totolotoNumbers.length < 5) {
	var randomNumber = Math.ceil(Math.random() * 49);
	if (randomNumber == 0) continue;
	var found = false;
	for (var i = 0; i < totolotoNumbers.length; i++) {
		if (totolotoNumbers[i] === randomNumber) {
			found = true;
			break
		}
	}
	if (found) continue;
	totolotoNumbers.push(randomNumber);
}

while (supTotoloto.length < 1) {
	var randomSup = Math.ceil(Math.random() * 13);
	if (randomSup == 0) continue;
	var found = false;
	for (var i = 0; i < supTotoloto.length; i++) {
		if (supTotoloto[i] === randomSup) {
			found = true;
			break
		}
	}
	if (found) continue;
	supTotoloto.push(randomSup);
}

totoloto = totolotoNumbers.sort(function(a, b) {
	return a - b
});

supTotoloto = supTotoloto.sort(function(a, b) {
	return a - b
});

for (var i = 0; i < totolotoNumbers.length; i++) {
	var currentTotNumbers = $('#totolotoNumbers').html();
	var newTotNumbers = currentTotNumbers + '<span class="numberT">' + totolotoNumbers[i] + '</span>';
	$('#totolotoNumbers').html(newTotNumbers);
}

for (var i = 0; i < supTotoloto.length; i++) {
	var currentSup = $('#totolotoSup').html();
	var newSup = currentSup + '<span class="supT">' + supTotoloto[i] + '</span>';
	$('#totolotoSup').html(newSup);
}
