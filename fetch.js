
   const apikey = 'yourapikey';

async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=cce921f6febacc787aff8b8ea70e0a75`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    var data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}


async function Callapi(city){


      var mytemp = await getWeatherData(city);
      console.log(mytemp)
      document.querySelector(".city").innerHTML = mytemp.name;
      document.querySelector(".temp").innerHTML = Math.round(mytemp.main.temp) +"°C";
      document.querySelector(".Humidity").innerHTML=mytemp.main.humidity+"%";
      document.querySelector(".Wind").innerHTML= mytemp.wind.speed+ "Km/h";
      document.querySelector(".Weather")

      var myimage =document.querySelector(".weathericon");
      if (mytemp.weather[0].main == 'Clouds'){
        myimage.src = "images/clouds.png";  
      }

      else if(mytemp.weather[0].main == 'Clear'){
      myimage.src = "images/clear.png";
    } 

    else if(mytemp.weather[0].main == 'Drizzle'){
      myimage.src = "images/drizzle.png";
    } 

    else if(mytemp.weather[0].main == 'Mist'){
      myimage.src = "images/mist.png";
    } 

    else if(mytemp.weather[0].main == 'Rain'){
      myimage.src = "images/rain.png";
    } 

    else if(mytemp.weather[0].main == 'Snow'){
      myimage.src = "images/snow.png";
    }

    document.querySelector(".Weather").style.display = "block";

    }

var city =document.querySelector(".search input");
  
var button =document.getElementById("mybutton");


button.addEventListener("click", () => {

    var cityname = city.value;
    Callapi(cityname);


  });