import './assets/styles.css';
import fetchData from './fetchAPI';


// alt+248 degree symbol

let tempInC; let tempInF;
let feelsInC; let feelsInF;


function DOMcontroller(data){
    tempInC = data.current.temp_c;
    tempInF = data.current.temp_f;
    feelsInC = data.current.feelslike_c;
    feelsInF = data.current.feelslike_f;
    setTemps();
    const locationContainer = document.querySelector('.location-container');
    const iconContainer = document.querySelector('.icon-container');
    const conditionContainer = document.querySelector('.weather-condition-container');
    const precContainer = document.querySelector('.precipitation-container');
    const humidContainer = document.querySelector('.humidity-container');
    const pressContainer = document.querySelector('.pressure-container');
    locationContainer.textContent = `${data.location.name}, ${data.location.region}`;
    iconContainer.src = data.current.condition.icon;    
    conditionContainer.textContent = data.current.condition.text;    
    precContainer.textContent = `${data.current.precip_mm} mm`;
    humidContainer.textContent = `${data.current.humidity}`;
    pressContainer.textContent = `${data.current.pressure_mb} hPa`;

}


//  Loading default data for Kamloops onload
window.onload = () =>{
    fetchData('Kamloops')
    .then( data => DOMcontroller(data))
    .catch(err =>console.log("Error: ", err));
}


//  Taking Inputs on enter
const inp = document.querySelector('.search-field');
inp.addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        fetchData(inp.value)
        .then( data => DOMcontroller(data))
        .catch(err =>{
            console.log("Error: ", err)
            alert('No location with the given name Found!');
        });
    }
})


//  Checkbox False = C and True = F

const toggleSwitch = document.querySelector('.checkbox');

toggleSwitch.addEventListener('click', () =>{
    setTemps();
});


function setTemps(){
    const tempContainer = document.querySelector('.temp-container');
    const feelsContainer = document.querySelector('.feels-like-container');
    if(!toggleSwitch.checked) 
    {  
        tempContainer.textContent = `${tempInC} °C`;
        feelsContainer.textContent = `${feelsInC} °C`;
    }
    else 
    {
        tempContainer.textContent = `${tempInF} °F`;
        feelsContainer.textContent = `${feelsInF} °F`;
    }
}
