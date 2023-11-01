window.addEventListener('DOMContentLoaded', (event)=>{
  const text = document.getElementById('dep') 
  const one_arrow = document.getElementById('one_arrow');
  const two_arrow = document.getElementById('two_arrow');
  const land = document.getElementById('land');
  const passenger = document.getElementById('passenger');
  const depatureDate = document.getElementById('depatureDate');

  // Retrieving data in from session storage     
  const retrievedData = sessionStorage.getItem("departure");
  const destination = sessionStorage.getItem("destination");
  const tfare = sessionStorage.getItem("fare");
  const traveller = sessionStorage.getItem("travellers");
  const dDate = sessionStorage.getItem("depart");

  if (tfare == 'one_way'){
    // alert('jagaban')
    one_arrow.style.display = 'block'
   two_arrow.style.display = 'none'

  }else if(tfare == 'return'){
    // alert('tinubu')
    one_arrow.style.display = 'none'
   two_arrow.style.display = 'block'

  }
  //for depature
  if (retrievedData) {
      console.log("Data retrieved:", retrievedData);
      text.textContent = retrievedData;
  } else {
      console.log("Data not found.");
  }
  //for destination
  if(destination){
    console.log("Data received:", destination);
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
})



