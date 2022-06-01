$(document).ready(function () {
    $(`#btn-get`).click(function(){
        if($(`#option`)==$(`#celc`)){
                    
        }
        let api=`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=`
        let askedCity = $(`#city-name`).val()
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