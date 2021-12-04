// Grabbing Form Data From a Submit Event
const form = document.querySelector('#testDataForm')
console.log(form)

// Add Event Listener for submit event(s)
form.addEventListener('click', (event) => {
    event.preventDefault();
    let city = document.querySelector('#city').value
})



const weather_data = () => {
    let city = document.querySelector('#city').value
    let api_key = 'e8d5b83f2b655c2f76ab2da382b63265'
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`).then(response => {
        data = response.data.main
        weather = response.data.weather

        var temp = "";
        temp += "<tr>";
        temp += "<td>" + weather[0]['main'] + "</td>";
        temp += "<td>" + data['temp_max'] + "</td>";
        temp += "<td>" + data['temp_min'] + "</td>"
        temp += "<td>" + data['humidity'] + "</td></tr>";
        document.getElementById('data').innerHTML = temp;
      
    });
}

const submitBtn = document.getElementById('submitButton')
submitBtn.addEventListener('click', weather_data);