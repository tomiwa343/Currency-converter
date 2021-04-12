document.getElementById('myInput').addEventListener('keyup', function(){
	let converted = document.getElementById('myInput').value;
	console.log(converted)
	let dollarValue = document.getElementById('dollarId')
	dollarValue.innerHTML = converted * 478
	let poundsValue = document.getElementById('poundsId')
	poundsValue.innerHTML = converted * 662
	let euroValue = document.getElementById('eurosId')
	euroValue.innerHTML = converted * 560
});