var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Afri Job Market' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'The About Us'});
});

/* GET DONATE PAGE. */
router.get('/donate', function(req, res, next) {
  res.render('donate', {title: 'The Donate Page'});
});

/*GET OUR PROGRAMME. */
router.get('/programmes', function(req, res, next) {
  res.render('programmes', {title: 'Our Programmes'});
});




/* GET jobs page. */
router.get('/jobs', function(req, res, next) {
  res.send("Hello no jobs avilable")
})

module.exports = router;
