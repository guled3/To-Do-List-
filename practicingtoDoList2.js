const inputText = document.getElementById('inputText');
const ol = document.getElementById('list');
//create an array
let myArray = [];


function clear() {
        inputText.value = "";
        ol.innerHTML = ''; //clear out the existing html
}

function removeItem(index) {
    myArray.splice(index,1);
    renderList();
}

function renderList() {
    //clear prior to render
    clear();
    //iterate through array items to generate render.
    myArray.map((item, index) => {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(item)); 
            li.onclick = () => { removeItem(index); };
            ol.appendChild(li);
        }) 
}

function handleclick() {

    
    //append data to my array
    if(inputText.value == "")
        return;
    
    //push value
    myArray.push(inputText.value);
    
    //render list
    renderList();
}