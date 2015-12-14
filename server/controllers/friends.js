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
        }
        res.redirect('/friends');
      });
    },
    delete: function(req, res) {
      Friend.remove({_id: req.body._id}, function (err){
        if (err) {
          console.log('DELETE', err);
        }
        res.redirect('/friends');
      })
    }
  };
})();
