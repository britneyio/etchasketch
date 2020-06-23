const container = document.getElementById('container');

const gridNum = document.getElementById("gridamount");

let div_num = prompt("How many grids?");
const current = document.getElementById("current");
current.textContent = "Current number of grids: " + div_num;

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








