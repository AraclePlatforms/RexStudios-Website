const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('endless-spacee.ejs', { title: 'Endless-Space' });
});


router.get('/beta', async (req, res) => {
	res.render('endless-beta', { title: 'Endless-Space Beta Release' })
});


module.exports = router;


