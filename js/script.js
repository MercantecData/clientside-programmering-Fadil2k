function fetchWeather( d ) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + d+ '&appid=9952618f6577130ae6fe830561d2b5b2&units=metric')
      .then(response => response.json())
      .then(data => {
          changeWeather(data);
      })
      .catch(() => {
      alert("Invalid input")
    });
  }


  function changeWeather( d ) {
    var weather = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${d.weather[0]["icon"]}.svg">`;
    var flag =  `<img src="https://www.countryflags.io/${d.sys.country}/shiny/64.png">`;
    var bg = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY    '
    var degrees = d.main.temp;
    var description = d.weather[0].description;
    var location = d.name;



      document.getElementById('flag').innerHTML = flag;
      document.getElementById('location').innerHTML = location;
      document.getElementById('temp').innerHTML = degrees + '&deg;';
      document.getElementById('icon').innerHTML = weather;
      document.getElementById('description').innerHTML = description;


  }

  document.getElementById('search').addEventListener('click', function() {
    var input = document.getElementById('input').value;
    fetchWeather(input);
  });



