var distance = require('google-distance');
 
distance.get(
  {
    origin: 'Vancouver, BC',
    destination: 'Toronto, ON'
  },
  function(err, data) {
    if (err) return console.log(err);
    console.log(data);
});
