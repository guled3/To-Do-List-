const inputText = document.getElementById('inputText');
const ol = document.getElementById('list');
//create an array
let myArray = [];


function clear() {
        inputText.value = "";
        ol.innerHTML = ''; //clear out the existing html 
} 

function handleclick() {

    
    //append data to my array
    if(inputText.value == "")
        return;
    myArray.push(inputText.value);
    
    //First lets grab an element with the ID list, this is the list parent container
    clear();
    
    //create a new li element and attach it to the ul one line at a time
    myArray.map(item => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item)); 
        ol.appendChild(li);
    }) 
}