window.addEventListener('DOMContentLoaded', (event)=>{
  const text = document.getElementById('dep') 
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

  // Retrieving data in Page 2     
  const retrievedData = sessionStorage.getItem("departure");

  if (retrievedData) {
      console.log("Data retrieved:", retrievedData);
      text.textContent = retrievedData;
  } else {
      console.log("Data not found.");
  }
})



