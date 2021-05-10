const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('endless-space.ejs', { title: 'Endless-Space' });
});


router.get('/beta', async (req, res) => {
	res.render('es-beta.ejs', { title: 'Beta Einschreibung - Endless-Space' });
});


module.exports = router;


