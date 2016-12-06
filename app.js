$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "https://myapi.profstream.com/api/29bf75/wines",
    success: function(wine) {
        console.log(wine[0].name + " " +  wine[0].year);
        console.log(wine[1].name + " " +  wine[1].year);  console.log(wine[2].name + " " +  wine[2].year);   console.log(wine[3].name + " " + wine[3].year);
        console.log(wine[4].name + " " + wine[4].year);
    },
    error: function() {
      alert("Uh oh!");
    }
  });


});
