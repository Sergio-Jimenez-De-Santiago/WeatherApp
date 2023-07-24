const form = document.querySelector('.change-location');
const details = document.querySelector('.details');
const image = document.querySelector('.time');
const icon = document.querySelector('.icon img')
const card = document.querySelector('.card')


const updateDetails = (name, condition, temp, IsDayTime, WeatherIcon) => {
    const updatedDetails = `
        <h5 class="my-3">${name}</h5>
        <div class="my-3">${condition}</div>
        <div class="display-4 my-4">
            <span>${temp}</span>
            <span>&deg;C</span>
        </div>
    `;

    details.innerHTML = updatedDetails;

    IsDayTime ? image.setAttribute('src', 'img/day.svg') : image.setAttribute('src', 'img/night.svg');
    icon.setAttribute('src', `img/icons/${WeatherIcon}.svg`);

    card.classList.remove('d-none');
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();

    getLocation(city).
        then(data => {
            return getWeather(data.Key);
        }).
        then(data => {
            updateDetails(city, data.WeatherText, data.Temperature.Metric.Value, data.IsDayTime, data.WeatherIcon);
        }).
        catch(err => console.log(err.message));
})