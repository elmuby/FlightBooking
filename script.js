window.addEventListener('DOMContentLoaded', (event)=>{
  //Variable for for the index page
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



// declaring variable for transport fare
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
    tfare = 2500000;
    console.log(tfare);
  }
  else if(event.target.value === 'business'){
    tfare = 500000;
  }
  else if(event.target.value = 'first_class'){
    tfare = 1500000;
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
  console.log(selectedDate);
  console.log(newDate);
  console.log(today);

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


// adding event listener to the search button
 searchButton.addEventListener('click', (e)=>{
  alert(" e dey work");
 })


 
})

//variables for the booking page


// if()
const jar = document.getElementById('one');
const car = document.getElementById('two');

const one_arrow = document.getElementById('one_arrow');
const two_arrow = document.getElementById('two_arrow');

jar.addEventListener('click', ()=>{
 one_arrow.style.display = 'block'
 two_arrow.style.display = 'none'
})

car.addEventListener('click', ()=>{
 one_arrow.style.display = 'none'
 two_arrow.style.display = 'block'
})      