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
    },
    create: function(req, res) {
      var friend = new Friend ({name: req.body.name, age: req.body.age});
      friend.save(function(err){
        if (err){
          console.log('CREATE',err);
        } else {
          res.json(friend);
        }
      });
    }
  };
})();
