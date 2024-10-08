
var images = ['images/hairsalonslide.jpg','images/massageslide.jpg','images/nailsalonslide.jpg'];

var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];

    if(i<images.length-1){
        i++;
    }

    else {
        i=0;

    }
    setTimeout("slideShow()" , 2000);
}


function realtimeClock(){
	var rtClock =new Date();
	
	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds =rtClock.getSeconds();
	
	 
	
	//Pad the hours,minutes and seconds with leading zeros
	hours =("0" + hours).slice(-2);
	minutes =("0" + minutes).slice(-2);
	seconds =("0" + seconds).slice(-2);
	
	//Display the clock
	document.getElementById('clock').innerHTML="Current Time:  "+ hours + " : " + minutes + " : " + seconds + " " ;
	var t = setTimeout(realtimeClock,500);
}

function init() {
   realtimeClock()
   slideShow()
}
window.onload = init;
