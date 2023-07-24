const key = 'JXImGyCCFDf4UDRIq5MWj0PZvgu6RDpw';

async function getLocation(city){
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

async function getWeather(cityID){
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityID}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
}