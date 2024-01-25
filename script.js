let addToDoButton  = document.getElementById('addTodo');
let toDoContainer  = document.getElementById('toDoZontainer')
let inputfield  = document.getElementById('inputField');

addToDoButton.addEventListener('click', function()  {
    var paragraf  = document.createElement('p');
paragraf.classList.add('paragraf-styling');
paragraf.innerText = inputfield.value;
toDoContainer.appendChild(paragraf);
inputfield.value = "";
paragraf.addEventListener('click', function() {
    paragraf.style.textDecoration = "line-through";
})
paragraf.addEventListener('dblclick', function() {
toDoContainer.removeChild(paragraf);
})

})