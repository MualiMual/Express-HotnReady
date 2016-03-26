var express = require('express');
var router = express.Router();

//////////////////////////////////////////////////////////////
// Home page. 

// GET Home page. 
router.get('/', function(req, res) {
  res.render('layout', {title: 'Home'});
});

// Render the about page.
router.get('/aboutus', function(req, res) {
  res.render('aboutus', {title: 'about'});
});

// Render the designs page.
router.get('/design', function(req, res) {
  res.render('design', {title: 'designs'});
});


// Render the contact page.
router.get('/contact', function(req, res) {
  res.render('contact', {title: 'Contact Us'});
});

// Render the support page.
router.get('/support', function(req, res) {
  res.render('support', {title: 'support'});
});

// Render the terms page.
router.get('/terms', function(req, res) {
  res.render('terms', {title: 'terms'});
});

// Render the privacy page.
router.get('/privacy', function(req, res) {
  res.render('privacy', {title: 'privacy'});
});

//////////////////////////////////////////////////////////////
// Render the dashboard page.

router.get('/login', function(req, res) {
    res.render('dashboard', { user : req.user });
});

router.get('/dashboard', function(req, res) {
    //res.render('dashboard', { user: req.user.username });
});

module.exports = router;
