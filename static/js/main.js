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
    axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8d5b83f2b655c2f76ab2da382b63265`).then(response => {
        data = response.data.list[0]
        if (data.length > 0) {
            var temp = "";
            data.forEach((itemData) => {
                temp += "<tr>";
                temp += "<td>" + itemData.weather[0].main + "and" + itemData.weather[1].main + "</td>";
                temp += "<td>" + itemData.main.temp_max + "</td>";
                temp += "<td>" + itemData.main.temp_min + "</td>"
                temp += "<td>" + itemData.main.humidity + "</td></tr>";
            });
            document.getElementById('data').innerHTML = temp;
        }
    });
}

const submitBtn = document.getElementById('submitButton')
submitBtn.addEventListener('click', weather_data);