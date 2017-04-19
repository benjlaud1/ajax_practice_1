$(document).ready(onReady);

function onReady () {
  $.ajax({
    url: 'http://www.omdbapi.com/?t=the+force+awakens',
    success: function (response) {
      $('#title').append('Movie title: ' + response.Title );
      $('#genre').append('Movie genre: ' + response.Genre );
      $('#released').append('Release Date: ' + response.Released );
      $('#rated').append('Rated: ' + response.Rated );
      $('#director').append('Director: ' + response.Director );
      $('#runtime').append('Runtime: ' + response.Runtime );
      $('#poster-div').append('<img src="' + response.Poster + '" alt="Movie poster">');
    } // end success function

  }); // end $.ajax
} // end onReady
