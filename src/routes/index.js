import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/PoiStoreRefiner', function(req, res, next) {
  res.render('poi-store-refiner/index.html');
});

export default router;
