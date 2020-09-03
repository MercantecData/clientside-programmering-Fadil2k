var bg;

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

  function getBG( d ) {
    return fetch('https://api.unsplash.com/photos/random?query=' + d+ '&client_id=RfB-3dfwTLcADB3VF80M-zkvBgF4ghiPAc2WyKN7V5M')
    .then(response => response.json())
    .then(data => {
      return data.urls.full;
    })
    .catch(() => {
//
  });
}

  function changeWeather( d ) {
    getBG(d.name).then(function(result) {
    var bg = result;
    document.getElementById('hero').style.backgroundImage = (`url('${bg}')`);


      var weather = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${d.weather[0]["icon"]}.svg">`;
      var flag =  `<img src="https://www.countryflags.io/${d.sys.country}/shiny/64.png">`;
      var degrees = d.main.temp;
      var description = d.weather[0].description;
      var location = d.name;






      document.getElementById('flag').innerHTML = flag;
      document.getElementById('location').innerHTML = location;
      document.getElementById('temp').innerHTML = degrees + '&deg;';
      document.getElementById('icon').innerHTML = weather;
      document.getElementById('description').innerHTML = description;

    });
  }

  document.getElementById('search').addEventListener('click', function() {
    var input = document.getElementById('input').value;
    fetchWeather(input);
  });



