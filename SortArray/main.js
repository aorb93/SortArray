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
    console.log(arrNumbers);
    arrNumbers = arrNumbers.sort();

    var elementosUnicos = [];
    var vecesRepetidos = [];
    var contador = 0;

    for(var i = 0; i < arrNumbers.length; i++){
        if(arrNumbers[i+1] === arrNumbers[i]){
            contador++;
        }else{
            elementosUnicos.push(arrNumbers[i]);
            vecesRepetidos.push(contador);
            contador = 1;
        }
    }

    console.log(elementosUnicos);
    console.log(vecesRepetidos);

    // var sortArrNumbers = arrNumbers.sort();
    // var distinctNumbers = arrNumbers.filter((v, i, a) => a.indexOf(v) === i);
    // var quantityNumbers = [];
    // var number = 0;
    // console.log(sortArrNumbers);
    // for(var i = 0; i < arrNumbers.lenght; i++){
    //     number = arrNumbers[i];

    // }
}

