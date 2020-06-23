const container = document.getElementById('container');

let div_num = prompt("How many grids? ex. 16, 64, 144,");
const current = document.getElementById("current");
current.textContent = "Current number of grids: " + div_num;

container.style.setProperty('grid-template-columns', "repeat("+ Math.round(Math.sqrt(div_num)) + ", .5fr)");
container.style.setProperty('grid-template-rows', "repeat("+ Math.round(Math.sqrt(div_num)) + ", .5fr)");
//creates 256 div with a class of square appended to container
for(let i = 0; i < div_num; i++){
    const div = document.createElement('div');
    div.className = 'square';
    div.textContent = i;

    //change background color when mouseover
    div.addEventListener("mouseover", function(e){
        e.target.style['background-color'] = 'pink';

    });
    container.appendChild(div);   
}

const square = document.getElementsByClassName("square");

//resets all of the squares
function reset(){
    for(let i = 0; i < square.length; i++){
        square[i].style.backgroundColor= 'white';
    }
}








