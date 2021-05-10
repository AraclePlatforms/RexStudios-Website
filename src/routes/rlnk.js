const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('rlnk.ejs', { title: 'Rlnk Link Shortener' });
});


router.get('/beta', async (req, res) => {
	res.redirect('https://rlnk.be')
});



module.exports = router;

