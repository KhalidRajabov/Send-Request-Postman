$(document).ready(function () {
    let input = document.getElementById(`city-name`)
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("btn-get").click();
        }
      });
    $(`#btn-get`).click(function(){
        if($(`#option`).val() == 'Celcius'){
                    alert(`true`)
        }
        let api=`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=`
        let askedCity = $(`#city-name`).val().toLowerCase()
        axios.get(api+askedCity)
        .then(function(response){
            console.log(response);
            $(`#city`).text("City: "+ response.data.location.name);
            $(`#country`).text("Country: "+response.data.location.country);
            $(`#weather`).text("Weather Forecast: "+response.data.current.temp_c);
            $(`#sky`).text("Sky Condition: "+response.data.current.condition.text)
        })
        .catch(function(error){
            $(`#add`).html(error.response.data.error.message)
        })
    })


})