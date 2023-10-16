import './assets/styles.css';
import fetchData from './fetchAPI';


// alt+248 degree symbol



//  Loading default data for Kamloops onload
function DOMcontroller(data){
    console.log('temp', data);
    const locationContainer = document.querySelector('.location-container');
    const tempContainer = document.querySelector('.temp-container');
    const iconContainer = document.querySelector('.icon-container');
    const conditionContainer = document.querySelector('.weather-condition-container');
    const feelsContainer = document.querySelector('.feels-like-container');
    const precContainer = document.querySelector('.precipitation-container');
    const humidContainer = document.querySelector('.humidity-container');
    const pressContainer = document.querySelector('.pressure-container');



    tempContainer.textContent = `${data.current.temp_c} °C`;
    locationContainer.textContent = `${data.location.name}, ${data.location.region}`;
    iconContainer.src = data.current.condition.icon;    
    conditionContainer.textContent = data.current.condition.text;    
    feelsContainer.textContent = `${data.current.temp_c} °C`;
    precContainer.textContent = `${data.current.precip_mm} mm`;
    humidContainer.textContent = `${data.current.humidity}`;
    pressContainer.textContent = `${data.current.pressure_mb} hPa`;

}
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



