var express     = require('express');
var mongoose    = require('mongoose');
var Flow        = mongoose.model('modelflow');
var router      = express.Router();


router.post('/', function(req, res) {
  new Flow({title : req.body.newsU})
  .save(function(err, newsU) {
    console.log(newsU);
    res.redirect('layout');
  });
});

router.get('/layout', function(req, res) {
  Flow.find(function(err, modelflow){
    console.log(modelflow)
  res.render(
    'layout',
    {title: 'layout', modelflow: modelflow}
    );
  });
});



module.exports = router;
