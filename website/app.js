// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'c30f1db79fb2111584ed06ef0b4c2e67&units=imperial&units=imperia';
const countryCode = 'us';
let endPointTemp;

// Function to POST data 
const postData = async ( url = '', data = {}) => {
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),      
    });
      try {
        const newData = await response.json();
        return newData
      } catch(error) {
      console.log("error", error);
      } 
  }
  
  // TODO-Async GET
    const retrieveData = async (url) => {
    const request = await fetch(url);    
    try {
    // Transform into JSON
    const allData = await request.json()
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp) + ' degrees Fahrenheit';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById("date").innerHTML = allData.date;
    }
    catch(error) {
      console.log("error", error);
    }
   }
  // GET temperature from end point
    const getTempFromEndPoint = async (url) => {
    const request = await fetch(url);    
    try {
    const allDataEndPoint = await request.json()
    endPointTemp = allDataEndPoint.main.temp;
    }
    catch(error) {
      console.log("Error get temperature from end point:", error);
    }
   }
  
// TODO-Chain your async functions
function postGet() {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    let d = new Date();
    let newDate = d.getMonth() + 1 + '/'+ d.getDate() + '/' + d.getFullYear();
    getTempFromEndPoint(`${baseURL}${zipCode},${countryCode}&appid=${apiKey}`).then (() => {
      postData(`/weather`, {feel: feelings, date: newDate, temp: endPointTemp}).then(() => {
        retrieveData("/all");
      }) ;
    })
  }

document.getElementById("generate").addEventListener("click", postGet)