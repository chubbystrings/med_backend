import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).send('<p>Welcome to medusa business backend</p>')
});

export default router;
