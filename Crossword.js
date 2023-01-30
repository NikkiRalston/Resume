//Starting my Java with a function
function loadCrosswordPuzzle(){
    var table = document.getElementById("puzzle");
    var arrWords = new Array("JavaScript", "cascade", "html");
    //table for the html 
    var tr = table.rows[1];
    for(var i=0; i<arrWords[0].length; i++){
        var cell = tr.cells[i];
        cell.innerText  = arrWords[0][i]; 
    }
    //Table for Java, which was then copied for the cascade as well
    for(var i=0; i<arrWords[1].length; i++){
        var trow = table.rows[i];
        var cell = trow.cells[1];
        cell.innerText = arrWords[1][i];
    }

    for(var i=0; i<arrWords[2].length; i++){
        var trow = table.rows[i];
        var cell = trow.cells[9];
        cell.innerText = arrWords[2][i];
    }
}