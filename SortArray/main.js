function reset(){
	document.getElementById("numbers").value = "";
	document.getElementById("result").innerHTML = "";
}

function valideKeySpace(event){
	var code = (event.which) ? event.which : event.keyCode;

	if (code == 8 || code == 32) {
		return true;
	} else if (code >= 48 && code <= 57) {
		return true;
	} else {
		return false;
	}
}

function setValues(){
	var txtNumbers = document.getElementById("numbers").value;
	var arrNumbers = txtNumbers.split(' ');
	var result = "";
	var valid = true;

	if(txtNumbers == ""){
		result = "Output: Enter Values";
		valid = false;
	}

	if(valid){
		groupNumber(arrNumbers);
	}

	//document.getElementById("result").innerHTML = result;
}

function groupNumber(arrNumbers){
	var count = 0;
	var distinctNumbers = arrNumbers.filter((v, i, a) => a.indexOf(v) === i);
	var arrRecurrent = [];

	for(var i = 0; i < distinctNumbers.length; i++){
		for(var j = 0; j < arrNumbers.length; j++){
			if(distinctNumbers[i] == arrNumbers[j]){
				count++;
			}
		}
		arrRecurrent.push(count);
		count = 0;
	}

	getMax(distinctNumbers, arrRecurrent);
}

function getMax(distinctNumbers, arrRecurrent){
    var auxMax;

    // Algoritmo de burbuja
	for(var i = 1; i < arrRecurrent.length; i++){
		for(var j = 0; j < (arrRecurrent.length - i); j++){
			if(arrRecurrent[j] < arrRecurrent[j + 1]){
				auxMax = arrRecurrent[j];
				arrRecurrent[j] = arrRecurrent[j + 1];
				arrRecurrent[j + 1] = auxMax;

				auxMax = distinctNumbers[j];
				distinctNumbers[j] = distinctNumbers[j + 1];
				distinctNumbers[j + 1] = auxMax;
			}
		}
	}

	print(distinctNumbers, arrRecurrent)
}

function print(distinctNumbers, arrRecurrent){
	var output = [];
	var result = "Output: ";
	for(var i = 0; i < arrRecurrent.length; i++){
		for(var j = 0; j < arrRecurrent[i]; j++){
			output.push(distinctNumbers[i]);
		}
	}

	for(var i = 0; i < output.length; i++){
		if(i > 0){
			result += ", " + output[i];
		} else {
			result += output[i];
		}
	}

	document.getElementById("result").innerHTML = result;
	console.log(output);
}

//let Numbers = {};

// Sort elements by frequency

// Print the elements of an array in the decreasing frequency if 2 numbers have same frequency then print the one which came first.

// Input:  arr[] = {2 5 2 8 5 6 8 8}
// Output: arr[] = {8, 8, 8, 2, 2, 5, 5, 6}

// Input: arr[] = {2 5 2 6 -1 9999999 5 8 8 8}
// Output: arr[] = {8, 8, 8, 2, 2, 5, 5, 6, -1, 9999999}