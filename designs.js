// Select color input
const color = document.getElementById('colorPicker');
// Select size input
let sizePicker = document.getElementById('sizePicker');
//Other required variables
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth')
const table = document.getElementById('pixelCanvas')

//attach a click event listener to each square. 
//color Input
color.addEventListener("click", function(){});

// When size is submitted by the user, clear the screen and call makeGrid()
sizePicker = addEventListener('submit', function(event){
    table.innerHTML = '';
    const rows = height.value;
    const columns = width.value;
    event.preventDefault();
    clearScreen();
    makeGrid(rows, columns);   
})
//function to fill colors squares, with global object 'this'
function updateColor() {
    this.setAttribute("style", `background-color: ${color.value}`);
}
//Clears a screen that has colored squares
const clearScreen = () => {
    while (table.rows.length > 0){
        table.deleteRow(0);
    }
}
//Primary function to make screen and attach event listeners
const makeGrid = (rows, columns) =>{
    for (i=0; i < rows; i++){
        let row = table.insertRow(0);
        for (c = 0; c < columns; c++){
            let cell = row.insertCell(0);
            //attach the event listener in the loop where create td elements
            cell.addEventListener('click', function(){
                cell.style.backgroundColour = color.value
                cell.addEventListener("click", updateColor);
        })
        }
    }
}

