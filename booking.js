window.addEventListener('DOMContentLoaded', (event)=>{
  const text = document.getElementById('dep') 
  const one_arrow = document.getElementById('one_arrow');
  const two_arrow = document.getElementById('two_arrow');
  const land = document.getElementById('land');
  const passenger = document.getElementById('passenger');
  const depatureDate = document.getElementById('depatureDate');
  const travelClass = document.getElementById('travelClass');
  const tprice = document.getElementById("price");
  const returnd = document.getElementById("returnDate");

  // Retrieving data in from session storage     
  const retrievedData = sessionStorage.getItem("departure");
  const destination = sessionStorage.getItem("destination");
  const tfare = sessionStorage.getItem("fare");
  const traveller = sessionStorage.getItem("travellers");
  const dDate = sessionStorage.getItem("depart");
  const price = sessionStorage.getItem("price");
  const tClass = sessionStorage.getItem("class");
  const returnDate = sessionStorage.getItem("return");

  if (tfare == 'one_way'){
    one_arrow.style.display = 'block'
   two_arrow.style.display = 'none'

  }else if(tfare == 'return'){
    one_arrow.style.display = 'none'
   two_arrow.style.display = 'block'

  }
  //for depature
  if (retrievedData) {
      text.textContent = retrievedData;
  } else {
      console.log("Data not found.");
  }
  //for return date
  if(returnDate){
    returnd.textContent = "Returning on: "+ returnDate;
  }

  //for destination
  if(destination){
    land.textContent = destination;  
  }else {
    console.log("Data not found")
  }
  //for travellers
  if(traveller){
    passenger.textContent = "Travellers: " + traveller;
  }
  else{
    console.log("Data not found");
  }
  //for departure date
  if(dDate){
    depatureDate.textContent = "Departing On: " + dDate;
  }
  else{
    console.log("Data not retrieved");
  }

  //for price
  if(price && tfare =="one_way"){
    tprice.textContent = "Cost: #" +price;
  }
  else if(price && tfare =="return"){
    tprice.textContent = "Cost: #" + (price)*2;
  }
  else{
    console.log("Data not found");
  }

  //for class
  if(tClass){
    travelClass.textContent = "Travelling Class: " + tClass.toLocaleUpperCase();
  }
  else{
    console.log("Data not found");
  }
})



