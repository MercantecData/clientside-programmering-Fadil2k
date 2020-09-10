var bg;
var clones = 0;


  function fetchWeather( d1, d2 ) {
    var URL;

    if(d2 == null) {URL = ('https://api.openweathermap.org/data/2.5/weather?q=' + d1 + '&appid=9952618f6577130ae6fe830561d2b5b2&units=metric')}
    else {URL = ('https://api.openweathermap.org/data/2.5/weather?lat=' +d1 +'&lon=' + d2 + '&appid=9952618f6577130ae6fe830561d2b5b2&units=metric')}

    fetch(URL)
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
      clones++;
      CloneBox();

    });
  }

  document.getElementById('search').addEventListener('click', function() {
    var input = document.getElementById('input').value;
    fetchWeather(input);
  });


  function CloneBox(){
    if( clones > 1  ) {
    $('#template')
         .clone()
         .attr('id', 'template' + clones++)
         .insertAfter($('[id^=template]:last').after('<br>'));
}
}
var myLatLng = {lat: 55.9396761, lng: 9.5155848};
var marker;
function initMap() {

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 8,
  center: myLatLng
});

var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  draggable:true,
  title: 'Marked weather location'
});

google.maps.event.addListener(marker, 'dragend', function(evt){
var lat = evt.latLng.lat().toFixed(3);
var lon = evt.latLng.lng().toFixed(3);
fetchWeather  (lat, lon);

});

}

