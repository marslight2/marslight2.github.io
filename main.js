function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(53.8, -1.55),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }

var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

var myIndexTravel = 0;
    carouselTravel();

function carouselTravel() {
    var i;
    var x = document.getElementsByClassName("travelSlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }

myIndexTravel++;
    if (myIndexTravel > x.length) {myIndexTravel = 1}
    x[myIndexTravel-1].style.display = "block";
    setTimeout(carouselTravel, 3000); // Change image every 3 seconds
    }

var myIndexDance = 0;
    carouselDance();

function carouselDance() {
    var i;
    var x = document.getElementsByClassName("danceSlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }

myIndexDance++;
    if (myIndexDance > x.length) {myIndexDance = 1}
    x[myIndexDance-1].style.display = "block";
    setTimeout(carouselDance, 3000); // Change image every 3 seconds
    }
