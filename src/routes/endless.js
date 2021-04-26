const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('endless-space.ejs', { title: 'Endless-Space' });
});


router.get('/beta', async (req, res) => {
	res.redirect('https://docs.google.com/forms/d/e/1FAIpQLSdqI3FC7bcV63sglAV7XbB09NLQo81LtboAKEgH7FxvqYOXEQ')
});


module.exports = router;


