var pickedColor;

document.getElementById('btn').onclick = function(){
	var element = document.createElement('li')
	element.textContent = 'some element';
	document.getElementById('list').appendChild(element);	
}

document.getElementById('colorPicker').onchange = function(){
 pickedColor = document.getElementById('colorPicker').value;
 console.log(pickedColor)
}
