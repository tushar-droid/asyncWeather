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

    tempContainer.textContent = `${data.current.feelslike_c} °C`;
    locationContainer.textContent = `${data.location.name}, ${data.location.region}`;
    iconContainer.src = data.current.condition.icon;    
    conditionContainer.textContent = data.current.condition.text;    
}
window.onload = () =>{
    fetchData('Kamloops')
    .then( data => DOMcontroller(data));
}


//  Taking Inputs on enter
const inp = document.querySelector('.search-field');
inp.addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        fetchData(inp.value)
        .then( data => DOMcontroller(data));
    }
})



