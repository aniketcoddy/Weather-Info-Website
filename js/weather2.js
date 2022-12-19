let weather = {
    "apiKey":"4a4eb313694206dcf7a6bd8cad8b69d6",
    fetchWeather:function(city){
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
       ).then((response)=> response.json()
       ).then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
      const{name}=data;
   const {icon , description}=data.weather[0];
   const{temp,humidity}=data.main;
   const{speed}=data.wind;
   const{all}=data.clouds;
   console.log(name,icon,description,temp,humidity,speed);
   document.querySelector(".city").innerHTML = name;
   document.querySelector(".image").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
   document.querySelector(".sunny").innerHTML = description;
   document.querySelector(".temp").innerHTML = Math.floor(temp)+"<span>°C</span>";
   document.querySelector(".humidity").innerHTML = " Humidity: "+humidity;
   document.querySelector(".Windspeed").innerHTML = " Wind: " +speed +"km/h";
   document.querySelector(".Cloudy").innerHTML = " rain: "+ all;

   document.querySelector(".hide").classList.remove("it");
   document.querySelector(".container3").classList.remove("located");
    },
 
  search4:function(){
   this.fetchWeather(document.querySelector(".input4").value);
  },
};


document.querySelector(".btn4").addEventListener("click",()=>{
       weather.search4();      
});

document.querySelector(".input4").addEventListener("keyup",(event)=>{
   if(event.key == "Enter"){
    weather.search4();
   }
});

