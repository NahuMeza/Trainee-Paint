var c = document.getElementById("area_de_dibujo");
var paper = c.getContext("2d");
var cleanP = document.getElementById("clean");
var getColour = document.getElementById("color_button");
var widthRange = document.getElementById("range_button");
var eraserButton = document.getElementById("check_button");
var oldLineColour = "#000000"

eraser = (eraserE) => {
    if(eraserE.target.checked == true){
        lineColour = "#f0f8ff";
    }
    else{
        lineColour = oldLineColour
        lineTrazado("black", 0, 0, 800, 0, paper, 5);
        lineTrazado("black", 0, 0, 0, 600, paper, 5);
        lineTrazado("black", 800, 0, 800, 600, paper, 5);
        lineTrazado("black", 0, 600, 800, 600, paper, 5);

    }
    
}
eraserButton.addEventListener("change", eraser);

lWidth = (widthEvent) => {
    lineW = parseInt(widthEvent.target.value);

}
widthRange.addEventListener("change", lWidth);

getLineColour = (colorEvent) => {
    lineColour = colorEvent.target.value;
    oldLineColour = colorEvent.target.value;
}
getColour.addEventListener("change", getLineColour);

const lineTrazado = (color, x_inicial, y_inicial, x_final, y_final, lienzo, lineW) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = lineW;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

lineTrazado("black", 0, 0, 800, 0, paper, 5);
lineTrazado("black", 0, 0, 0, 600, paper, 5);
lineTrazado("black", 800, 0, 800, 600, paper, 5);
lineTrazado("black", 0, 600, 800, 600, paper, 5);

//var keys = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};
var lineColour = "#000000";
var lineW = 5;

let onPress = false;
const onDraw = (e) => {
    if(onPress == true) {
        lineTrazado(lineColour, e.clientX - 1, e.clientY - 1, e.clientX + 1, e.clientY + 1, paper, lineW);
        
    }
}

c.addEventListener("mousedown", () => {onPress = true;});
c.addEventListener("mouseup", () => {onPress = false;});
c.addEventListener("mousemove", onDraw);


cleanPaper = () => {
    paper.clearRect(0, 0, c.width, c.height);
    lineTrazado("black", 0, 0, 800, 0, paper, 5);
    lineTrazado("black", 0, 0, 0, 600, paper, 5);
    lineTrazado("black", 800, 0, 800, 600, paper, 5);
    lineTrazado("black", 0, 600, 800, 600, paper, 5);
    
}
cleanP.addEventListener("click", cleanPaper);

