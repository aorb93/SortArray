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
		result = recurrent(arrNumbers);
	}

	document.getElementById("result").innerHTML = result;
}

function recurrent(arrNumbers){
	// arrNumbers = arrNumbers.sort();
	var copyArrNumbers = arrNumbers;
	var elementosUnicos = [];
	var vecesRepetidos = [];
	var contador = 0;
	groupNumber(arrNumbers);

	// for(var i = 0; i < arrNumbers.length; i++){
	//     if(arrNumbers[i+1] === arrNumbers[i]){
	//         contador++;
	//     }else{
	//         elementosUnicos.push(arrNumbers[i]);
	//         vecesRepetidos.push(contador);
	//         contador = 1;
	//     }
	// }

	// console.log(elementosUnicos);
	// console.log(vecesRepetidos);

	// var sortArrNumbers = arrNumbers.sort();
	// var distinctNumbers = arrNumbers.filter((v, i, a) => a.indexOf(v) === i);
	// var quantityNumbers = [];
	// var number = 0;
	// console.log(sortArrNumbers);
	// for(var i = 0; i < arrNumbers.lenght; i++){
	//     number = arrNumbers[i];

	// }
}

function groupNumber(arrNumbers){
	var arrAux = [];
	var currentNumber;
	var count = 0;
	var arrLength = arrNumbers.length;
	var distinctNumbers = arrNumbers.filter((v, i, a) => a.indexOf(v) === i);
	var arrRecurrent = [];
	console.log(arrNumbers);
	console.log(distinctNumbers);

	for(var i = 0; i < distinctNumbers.length; i++){
		for(var j = 0; j < arrNumbers.length; j++){
			if(distinctNumbers[i] == arrNumbers[j]){
				count++;
			}
		}
		arrRecurrent.push(count);
		count = 0;
	}

	console.log(arrRecurrent);

	for(var i = 0; i < arrLength; i++){
		currentNumber = arrNumbers[i];
		arrAux.push(arrNumbers[i]);

		for(var j = 0; j < arrLength; j++){
			if(i != j){
				if(currentNumber == arrNumbers[j]){
					arrAux.push(arrNumbers[j]);
					arrNumbers = removeUsedNumer(arrNumbers, i, j);
					arrLength = arrNumbers.length;
					j = arrLength; i = -1;
				}
			}
		}
	}
	return arrAux;
}

function removeUsedNumer(arrOriginal, param1, param2){
	var arrAux = [];
	
	for(var i = 0; i < arrOriginal.length; i++){
		if(i != param1){
			if(i != param2){
				arrAux.push(arrOriginal[i])
			}
		}
	}
	return arrAux;
}

// Sort elements by frequency

// Print the elements of an array in the decreasing frequency if 2 numbers have same frequency then print the one which came first.

// Input:  arr[] = {2 5 2 8 5 6 8 8}
// Output: arr[] = {8, 8, 8, 2, 2, 5, 5, 6}

// Input: arr[] = {2 5 2 6 -1 9999999 5 8 8 8}
// Output: arr[] = {8, 8, 8, 2, 2, 5, 5, 6, -1, 9999999}