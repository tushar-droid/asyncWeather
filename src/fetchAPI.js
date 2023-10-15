const API = 'https://api.weatherapi.com/v1/current.json?key=f13ba00b5cc14ad9b0b33817231310&q=';


export default async function fetchData(location){
    const response = await fetch(API+location, {mode:'cors'});
    const data = await response.json();
    return data;
}


