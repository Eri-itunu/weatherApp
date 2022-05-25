let weather = {
    apiKey: "488fb5d4d9d68cc533ba44205ae446a1",

    getLocation: function(city,limit){
        fetch(
            "http://api.openweathermap.org/geo/1.0/direct?q="
            +city+"&limit="+
            limit+"&appid="+this.apiKey
        ).then((response) => response.json())
        .then((data) =>console.log(data));

    },

    fetchWeather: function(lat,lon){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat="
             +lat+"&lon="+lon+"&appid=" +this.apiKey
        ).then((response) => response.json())
        .then((data) =>console.log(data));
    },

    displayWeather: function(data){

    }
} 

lon =3.3941795
lat =6.4550575