//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const removeButton= document.getElementByTagName("input");

removeButton.addEventListener('click',()=>{
	const selectedOption = colorSelect.options[colorSelect.selectedIndex];
	colorSelect.removeChild(selectedOption);
})