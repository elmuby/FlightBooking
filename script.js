// window.addEventListener('DOMContentLoaded', (event)=>{
//   //Variable for for the index page
const selectFare = document.getElementById("tfare");
const tpClass = document.getElementById("class");
const from = document.getElementById("from");
const destination = document.getElementById("to");
const depatureDate = document.getElementById("depatureDate");
const returnDate = document.getElementById("returnDate");
const travellers = document.getElementById("travellers");
const dateError  = document.getElementById("dateError");
const searchButton = document.getElementById("search_button");
const rtrn = document.getElementById("return");
const form = document.getElementById("form");
const returnError = document.getElementById('returnError');
const travellerError = document.getElementById('travellerError');



// declaring variable for transport fare and calculating the cost for each
var tfare;

//setting type of fare
selectFare.addEventListener('input', (event)=>{
  if(event.target.value ==='one_way'){
    returnDate.disabled  = true;
  }
  else{
    returnDate.disabled = false; 
  }
});

//setting the price of class;
tpClass.addEventListener('input', (event)=>{
  if(event.target.value === 'economy'){
    tfare = 1500000;
    console.log(tfare);
  }
  else if(event.target.value === 'business'){
    tfare = 2500000;
  }
  else if(event.target.value === 'first_class'){
    tfare = 3500000;
    console.log(tfare);
  }

})

//adding event listener to date field
var selectedDate='';
depatureDate.addEventListener('input', function(){
  const today = new Date();
  selectedDate = new Date(depatureDate.value);
  if(selectedDate < today){
    dateError.textContent= 'Date must be greater than today';
    dateError.style.color = 'red';
    dateError.style.fontSize = '13px';
    searchButton.disabled = true;
    searchButton.style.backgroundColor = "gray";
  }
  else{
    dateError.textContent = '';
    searchButton.disabled =  false;
    searchButton.style.backgroundColor = "#1c96c5";
  }
});

//adding event listener to the returndate

returnDate.addEventListener('input', function(){
  const newDate = new Date(returnDate.value);
  const today = new Date();

  if(selectedDate > newDate){
    returnError.textContent = 'Return Date must be greater than Depature Date';
    returnError.style.color = 'red';
    returnError.style.fontSize = '13px';
    searchButton.disabled = true;
    searchButton.style.backgroundColor = "gray";
  }
  else{
    returnError.textContent = '';
    searchButton.disabled = false;
    searchButton.style.backgroundColor = "#1c96c5";
  }
 });

 //adding event listener to the travellers
 travellers.addEventListener('input' ,function(event){
  const value = event.target.value;
  tfare = value * tfare;
  console.log(tfare);
 })

// adding event listener to the search button
 searchButton.addEventListener('click', (e)=>{
  if(selectFare.value === "default" || tpClass.value === "default" ){
    alert('Check fare or Class')
  }

   else if(destination.value ==="default" || from.value === "default") {
     alert('Check destination or deparutre')
   }
 else if(!depatureDate.value){
    dateError.textContent= 'Date not selected';
    dateError.style.color = 'red';
    dateError.style.fontSize = '13px';
  }
  else if(returnDate.disabled === false && !returnDate.value){
    returnError.textContent = 'Return Date Not selected';
    returnError.style.color = 'red';
    returnError.style.fontSize = '13px';
  }
  else if(travellers.value ===''){
    travellerError.textContent = 'Please select traveller';
    travellerError.style.color = 'red';
    travellerError.style.fontSize = '13px';
  }
  else {
    alert("e dey work");
    dateError.textContent= "";
    returnDate.textContent ="";
    travellerError.textContent = "";
    john = true;
    sessionStorage.setItem("departure", from.value);
    sessionStorage.setItem("fare", selectFare.value);
    sessionStorage.setItem("destination", destination.value);
    sessionStorage.setItem("travellers", travellers.value);
    sessionStorage.setItem("depart", depatureDate.value);
    sessionStorage.setItem("return",returnDate.value);
    sessionStorage.setItem("class", tpClass.value);
    sessionStorage.setItem("price",tfare);
    
  }
})

// })

var john = false

searchButton.addEventListener('click', (e)=>{
  if (john === true){  
    alert('received');
    e.preventDefault();
    window.location.href = "./booking.html";
  }
  else{
    alert("Error")
  }
})