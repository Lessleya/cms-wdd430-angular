const path = require('path')
const express = require('express');
const router = express.Router();
// const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'CMS' });
  res.sendFile(path.join(__dirname, 'dist/cms-wdd430-angular/index.html'));
});

module.exports = router;
