const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('sakumo.ejs', { title: 'SakumoBot' });
});


router.get('/invite', async (req, res) => {
	res.redirect('https://sakumo.ywk.ch/invite')
});



module.exports = router;

