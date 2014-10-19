var dropUser = -1;

function getMember(){
  // console.log('calling the Linkedin Member's Profile);
  IN.API.Profile("me").result(function(result) {
    dropUser = result.values[0].id;
    // open connection to db
    var db = require('./config/redis')



    // client.
    debugger;

    // db.disconnect();


    return result.values[0];
  });
};



$(function() {

  $('.IN-widget').on('click', function(e) {
    // stop propagation because linkedin login button is awful
    e.stopPropagation();
  });

});