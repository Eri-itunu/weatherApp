
let weather = {
    apiKey: "488fb5d4d9d68cc533ba44205ae446a1",
    



    getLocation:  function(city,limit){
        fetch(
            "http://api.openweathermap.org/geo/1.0/direct?q="
            +city+"&limit="+
            limit+"&appid="+this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displaycoordinates(data))  
        
    },

    displaycoordinates: function(data){
        
        const{name , lon , lat} = Object.values(data)[0]
        console.log(name,lon ,lat)
        this.fetchWeather(lon,lat)

         
    },

    fetchWeather:  function (lon,lat){
     fetch(
         "https://api.openweathermap.org/data/2.5/weather?lat="
         +lat+"&lon="+lon+"&appid=" +this.apiKey
 
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },

    displayWeather: function (data){
        const{icon, description } = Object.values(data)[1][0]
        const{temp, humidity} = Object.values(data)[2][0]
        const{speed} = Object.values(data)[3]

        console.log(icon,description,temp,humidity,speed)

    }



   

   
} 
