const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('sakumo/index.ejs', { title: 'SakumoBot' });
});


router.get('/commands', async (req, res) => {
	res.render('sakumo/commands.ejs', { title: 'SakumoBot - Commands' });
});


module.exports = router;

