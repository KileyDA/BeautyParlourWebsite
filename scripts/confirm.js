"use strict";
/*Get variables from form and check rules*/

function validate(){
	var errMsg = "";
	var result =true;
	
	if(result){
		alert("Booking Successful");
	
	}
	else{
		alert("Booking Failed");
	}
	return result;
	
}

function getBooking(){
	//f sessionStorage for username is not empty
	if(sessionStorage.firstname !=undefined){
		//confirmation text
		document.getElementById("confirm_fname").textContent = sessionStorage.firstname;
		document.getElementById("confirm_lname").textContent = sessionStorage.lastname;	
		document.getElementById("confirm_phoneNo").textContent = sessionStorage.phoneNumber;
		document.getElementById("confirm_gender").textContent = sessionStorage.gender;
		document.getElementById("confirm_age").textContent = sessionStorage.age;
		document.getElementById("confirm_email").textContent = sessionStorage.email;
		document.getElementById("confirm_address").textContent = sessionStorage.streetAd;
		document.getElementById("confirm_city").textContent = sessionStorage.city;		
		document.getElementById("confirm_state").textContent = sessionStorage.state;		
		document.getElementById("confirm_postalCode").textContent = sessionStorage.postal;
		document.getElementById("confirm_service").textContent = sessionStorage.service;
		document.getElementById("confirm_subject").textContent = sessionStorage.subject;
		document.getElementById("confirm_comment").textContent = sessionStorage.comment;		

	}
}

function cancelBooking(){
	window.location = "enquiry.html";
}

function init(){
	//call the getBooking() function
	getBooking();
	
	//Link the variable to the HTML elementFromPoint
	var bookForm = document.getElementById("bookForm");
	var cancelBooking =document.getElementById("cancelButton");
	
	//Check which button is being clicked
	if(bookForm){
		bookForm.onsubmit = validate;
		
	}
	else{
		cancelBooking.onclick =cancelBooking();
	}
}

window.onload = init;