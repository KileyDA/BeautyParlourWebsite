
///////  FORM VALIDATION ////////////////////////////////////////////////////////////
var gErrorMsg = "";

function validateForm(){
	"use strict";   //directive to ensure variables are declared
   var isAllOK = false;  
   gErrorMsg = "";  //reset error message
   var firstnameOK = chkfirstName();
   var lastnameOK = chklastName();
   var phoneNumberOk = chkPhoneNumber();
   var genderOk = chkGender();
   var age0k =chkAge();
   var emailOK = chkEmail();
   var streetAdress = chkStreetAddress();
   var cityOk = chkCity();
   var stateOk = chkState();
   var postalOk =chkPostalCode();
   var serviceOk =ServiceSelected();
   
   var firstname=document.getElementById("fname").value;
   var lastname = document.getElementById("lname").value;
   var phoneNumber = document.getElementById("phoneNo").value;
  // var gender =
   var age =document.getElementById("pdob").value;
   var email =document.getElementById("pemail").value;
   var streetAd = document.getElementById("streetAddress").value;
   var city= document.getElementById("City").value;
   var state= document.getElementById("states").value;
   var postal = document.getElementById("postalCode").value;
   var service=document.getElementById("services").value;
   var subject=document.getElementById("sbj").value;
   var comment=document.getElementById("issuedescription").value;
   
   if(document.getElementById('male').checked) { 
       var gender = document.getElementById('male').value;
      
    }
	else if(document.getElementById('female').checked){
		var gender = document.getElementById('female').value;
	}
   
   if (firstnameOK && lastnameOK && phoneNumberOk && chkGender() && age0k && emailOK && streetAdress && cityOk && stateOk && serviceOk){
      isAllOK = true;
   }
   else{
      alert(gErrorMsg); //display concatenated error messages
	  gErrorMsg = "";  //reset error msg
      isAllOK = false;
   }
            if(isAllOK){
	 storeBooking(firstname,lastname,phoneNumber,age,email,streetAd,city,state,postal,service,subject,comment,gender)
   }
      return isAllOK;
 
 
}
function storeBooking(firstname,lastname,phoneNumber,age,email,streetAd,city,state,postal,service,subject,comment,gender){
	//Get values from the parameters above and store them as sessionStorage attribute.
	//We use the same name for the attribute and the element id to avoid confusion
	
	sessionStorage.firstname =firstname;
	sessionStorage.lastname =lastname;
	sessionStorage.phoneNumber=phoneNumber;
	sessionStorage.age =age;
	sessionStorage.email=email;
	sessionStorage.streetAd =streetAd;
	sessionStorage.city =city;
	sessionStorage.state =state;
	sessionStorage.postal =postal;
	sessionStorage.service =service;
	sessionStorage.subject =subject;
	sessionStorage.comment =comment;
	sessionStorage.gender =gender;
	
}

// check first name entered  valid format
// demo: nested single branch if statements
// demo: string property and regular expression pattern
function chkfirstName() {
	var fname= document.getElementById("fname").value;
	var pattern = /^[a-zA-Z ]+$/      //check only alpha characters or space  
	var nameOk = true; //boolean variables
	if ((fname.length == 0)){        //same as fname==""
		gErrorMsg = gErrorMsg + "Please enter your first name\n"
		 nameOk = false;  //if condition or clause complex more readable if branches on separate lines
	}
	else{
		if (!pattern.test(fname)){
			gErrorMsg = gErrorMsg + "Your name must only contain alpha characters\n"
			nameOk = false;  //if condition or clause complex more readable if branches on separate lines
		}
	}
	
    if (!nameOk){
		document.getElementById("fname").style.borderColor = "red"; 
        document.getElementById("fname").value = "";
		
	}
	else{
		document.getElementById("fname").style.borderColor = "black"; 
	}
	return  nameOk;
}

// check last name entered  valid format
function chklastName(){
	var lname= document.getElementById("lname").value;
	var pattern = /^[a-zA-Z ]+$/      //check only alpha characters or space  
	var nameOk = true; //boolean variables
	if ((lname.length == 0)){        //same as fname==""
		gErrorMsg = gErrorMsg + "Please enter your last name\n"
		 nameOk = false;  //if condition or clause complex more readable if branches on separate lines
	}
	else{
		if (!pattern.test(lname)){
			gErrorMsg = gErrorMsg + "Your name must only contain alpha characters\n"
			nameOk = false;  //if condition or clause complex more readable if branches on separate lines
		}
	}
	
    if (!nameOk){
		document.getElementById("lname").style.borderColor = "red"; 
		document.getElementById("lname").value = "";
	}
	else{
		document.getElementById("lname").style.borderColor = "black"; 
	}
	return  nameOk;
}

//Check phone number entered is correct
function chkPhoneNumber(){
	var phoneNo= document.getElementById("phoneNo").value;
	var pattern = /^[0-9]+$/      //check only alpha characters or space  
	var nameOk = true; //boolean variables
	if ((phoneNo.length == 0)){        //same as fname==""
		gErrorMsg = gErrorMsg + "Please enter your phone number\n"
		 nameOk = false;  //if condition or clause complex more readable if branches on separate lines
	}
	else{
		if (!pattern.test(phoneNo)){
			gErrorMsg = gErrorMsg + "Your phone number must only contain numbers\n"
			nameOk = false;  //if condition or clause complex more readable if branches on separate lines
		}
	}
	
    if (!nameOk){
		document.getElementById("phoneNo").style.borderColor = "red"; 
		document.getElementById("phoneNo").value = "";
	}
	else{
		document.getElementById("phoneNo").style.borderColor = "black"; 
	}
	return  nameOk;
}

//check that gender has been selected
function chkGender(){
	var selected = false;
	var isMale = document.getElementById("male").checked;
	var isFemale = document.getElementById("female").checked;
	
	
	if (isMale || isFemale) //either one is selected or checked.
		selected = true;  //we haven't used {}. BE CAREFUL about adding extra lines
	else{
		selected = false;
		gErrorMsg = gErrorMsg + "Please select Gender\n"
	}

   return selected;
}

//Check Age entered is correct
function chkAge(){
	var pdob= document.getElementById("pdob").value;
	var pattern = /^[0-9]+$/      //check only alpha characters or space  
	var ageOk = true; //boolean variables
	if ((pdob.length == 0)){        //same as fname==""
		gErrorMsg = gErrorMsg + "Please enter your Age\n"
		 ageOk = false;  //if condition or clause complex more readable if branches on separate lines
	}
	else{
		if (!pattern.test(pdob)){
			gErrorMsg = gErrorMsg + "Your Age must only contain numbers\n"
			ageOk = false;  //if condition or clause complex more readable if branches on separate lines
		}
	}
	
    if (!ageOk){
		document.getElementById("pdob").style.borderColor = "red";
		document.getElementById("pdob").value = "";		
	}
	else{
		document.getElementById("pdob").style.borderColor = "black"; 
	}
	return  ageOk;
}

//check the pattern of email(regular expression)
// demo: two branch if statement with then
function chkEmail() {  
	var pemail = document.getElementById("pemail");
	var result = false; 
	var pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-za-zA-Z0-9.-]{1,4}$/;
	if (pattern.test(pemail.value)){
		result = true;
	}
   else{  //braces a good idea even if not strictly needed for single statement
		result = false;
      gErrorMsg = gErrorMsg + "Please enter a valid email address\n"
	}
    if (!result){
		document.getElementById("pemail").style.borderColor = "red";
		document.getElementById("pemail").value = "";		
	}
	else{
		document.getElementById("pemail").style.borderColor = "black"; 
	}
	return result;
}

// check Street Address entered  has valid format
function chkStreetAddress(){
	var streetAddress= document.getElementById("streetAddress").value;
	var pattern = /^[a-zA-Z ]+$/      //check only alpha characters or space  
	var streetOk = true; //boolean variables
	if ((streetAddress.length == 0)){        //same as fname==""
		gErrorMsg = gErrorMsg + "Please enter your Street Address\n"
		 streetOk = false;  //if condition or clause complex more readable if branches on separate lines
	}
	else{
		if (!pattern.test(streetAddress)){
			gErrorMsg = gErrorMsg + "Your name must only contain alpha characters\n"
			streetOk = false;  //if condition or clause complex more readable if branches on separate lines
		}
	}
	
    if (!streetOk){
		document.getElementById("streetAddress").style.borderColor = "red"; 
		document.getElementById("streetAddress").value = "";
	}
	else{
		document.getElementById("streetAddress").style.borderColor = "black"; 
	}
	return  streetOk;
}

//Check City Entered has Valid Format
function chkCity(){
	var City= document.getElementById("City").value;
	var pattern = /^[a-zA-Z ]+$/      //check only alpha characters or space  
	var cityOk = true; //boolean variables
	if ((City.length == 0)){        //same as fname==""
		gErrorMsg = gErrorMsg + "Please enter your City/Town\n"
		 cityOk = false;  //if condition or clause complex more readable if branches on separate lines
	}
	else{
		if (!pattern.test(City)){
			gErrorMsg = gErrorMsg + "Your name must only contain alpha characters\n"
			cityOk = false;  //if condition or clause complex more readable if branches on separate lines
		}
	}
	
    if (!cityOk){
		document.getElementById("City").style.borderColor = "red";
		document.getElementById("City").value = "";		
	}
	else{
		document.getElementById("City").style.borderColor = "black"; 
	}
	return  cityOk;
}

function chkState(){
	var selected = false; //boolean variable 
	
	var states = document.getElementById("states").value;
	if (states!="none"){
		selected = true; 
	}
	else{
		selected = false;
		gErrorMsg = gErrorMsg + "Please select a State\n"
	}
	
	if (!selected){
		document.getElementById("states").style.borderColor = "red"; 
		document.getElementById("states").value = "";
	}
	else{
		document.getElementById("states").style.borderColor = "black"; 
	}
   return selected;
}

//Check Postal Code entered is correct
function chkPostalCode(){
	var postalCode= document.getElementById("postalCode").value;
	var pattern = /^[0-9]+$/      //check only alpha characters or space  
	var codeOk = true; //boolean variables
	if ((postalCode.length == 0)){        //same as fname==""
		gErrorMsg = gErrorMsg + "Please enter your Postal Code\n"
		 codeOk = false;  //if condition or clause complex more readable if branches on separate lines
	}
	else{
		if (!pattern.test(postalCode)){
			gErrorMsg = gErrorMsg + "Your Postal Code must only contain numbers\n"
			codeOk = false;  //if condition or clause complex more readable if branches on separate lines
		}
	}
	
    if (!codeOk){
		document.getElementById("postalCode").style.borderColor = "red";
		document.getElementById("postalCode").value = "";
	}
	else{
		document.getElementById("postalCode").style.borderColor = "black"; 
	}
	return  codeOk;
}

//Check Service is selected

function ServiceSelected(){
	var selected = false; //boolean variable 
	
	var services = document.getElementById("services").value;
	if (services!="none"){
		selected = true; 
	}
	else{
		selected = false;
		gErrorMsg = gErrorMsg + "Please select a Service\n"
	}
	
	if (!selected){
		document.getElementById("services").style.borderColor = "red";
		document.getElementById("services").value = "";		
	}
	else{
		document.getElementById("services").style.borderColor = "black"; 
	}
   return selected;
}


function storeitem(item_id) {
    sessionStorage.setItem("item_id", item_id);
    window.location.replace("enquiry.html");
}
function displayitem() {
    document.getElementById("sbj").value = "RE: Enquiry on " + sessionStorage.getItem("item_id");
	document.getElementById("services").value =sessionStorage.getItem("item_id");
}

function checkForm() {
    var services = document.getElementById("services").value;
    sessionStorage.services = services;
   
    return result;
}
//Store individual Service page into sessionStorage
function storeService(serviceName) {
    var options = ["Hair Locs", "Knotless Braids", "Wig Installation", "Hair Coloring","Kids HairCut","Mens HairCut","Hair Coloring and Treatment","Beard Sculpting",
	                "StickOns and Tips","Gel Polish","Pedicure","Acrylic Nails","Massage","Facials","Waxing","Exfoliation"];

    options.forEach(array);

    function array(value) {
        if (value == serviceName) {
            sessionStorage.serviceIndex = options.indexOf(value);
        }
    }
}

//Fill the subject field with the value of product
function storeSub() {
    document.getElementById("services").selectedIndex = sessionStorage.serviceIndex;

    var services = document.getElementById("services").value;

    sessionStorage.subject = services;
    document.getElementById("sbj").value = sessionStorage.subject;
}

//Storing state optgroup into array
function statelist() {
    var select = document.getElementById("states");

    var options = ["Sabah", "Kedah", "Negeri Sembilan", "Perak","Selangor","Pehang","Sarawak","Perlis",
	               "Johor","Terengganu","Malacca","Kelantan","Massage","Penang"];

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}
//change the value of the session storage according to the new state selected by user
function change1() {
    var states = document.getElementById("states").value;
    sessionStorage.states = states;
	document.getElementById("states").value =  sessionStorage.states;
}
//Storing service optgroup into array
function servicelist1() {
    var select = document.getElementById("services");

    var options = ["Hair Locs", "Knotless Braids", "Wig Installation", "Hair Coloring","Kids HairCut","Mens HairCut","Hair Coloring and Treatment","Beard Sculpting",
	               "StickOns and Tips","Gel Polish","Pedicure","Acrylic Nails","Massage","Facials","Waxing","Exfoliation"];

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}
//change the value of the session storage according to the new product selected by user
function change() {
    var services = document.getElementById("services").value;
    sessionStorage.services = services;
	document.getElementById("sbj").value = "RE: Enquiry on " + sessionStorage.services;
}

function init() {
   var regForm = document.getElementById("enquiryForm");
   regForm.onsubmit = validateForm;  
    displayitem()
}

window.onload = init;  