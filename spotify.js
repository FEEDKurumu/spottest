
$.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token",
  method: "POST",
  data: '{"grant_type":"client_credentials"}',
  beforeSend: function(xhr) {
    xhr.setRequestHeader("Authorization", "Basic OWM0N2RkOTE0MmZkNDQ4MGEzNzcxYmZiMTk1YzEzOTI6MzNjNzI4OGY5NTBkNGUwY2I2N2MzMDZjMjMzMTZjODA=");
    xhr.setRequestHeader('Accept', "application/json");
  }
  // header: {
  //   'Authorization': 'Basic OWM0N2RkOTE0MmZkNDQ4MGEzNzcxYmZiMTk1YzEzOTI6MzNjNzI4OGY5NTBkNGUwY2I2N2MzMDZjMjMzMTZjODA=',
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
}).done(function(response) {
  console.log(response);
})