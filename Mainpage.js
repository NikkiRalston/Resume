window.onload = initLink;

var thePic = 0;
var myPix = new Array("IMG_3919.JPG","IMG_3920.JPG","IMG_3921.JPG", "IMG_3922.JPG","IMG_3923.JPG");

function initLink(){
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

function processPrevious() {
    if (thePic == 0) {
        thePic = myPix.length;
    } 
    thePic--;
    document.getElementById("myPicture").src = myPix[thePic];
    return false;
}

function processNext () {
    thePic++;
    if(thePic == myPix.length) {
        thePic = 0;
    }
    document.getElementById("myPicture").src = myPix[thePic];
    return false;
}

