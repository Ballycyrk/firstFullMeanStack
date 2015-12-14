var mongoose    = require('mongoose');
var Friend      = mongoose.model('Friend');

module.exports = (function() {
  return {
    show: function(req, res) {
      Friend.find({}, function(err, friends) {
        if (err) {
          console.log('Error with database', err);
        } else {
          res.json(friends);
        }
      });
    }
  };
})();
