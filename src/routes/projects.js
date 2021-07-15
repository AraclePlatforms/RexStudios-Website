const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('projects/projekte.ejs', { title: 'Projekte', projectlink: true });
});



router.get('/sakumo', async (req, res) => {
	res.render('projects/sakumo.ejs', { title: 'SakumoBot - Projekte' });
});

router.get('/intragalaxia', async (req, res) => {
	res.render('projects/intragalaxia.ejs', { title: 'IntraGalaxia - Projekte' });
});

router.get('/link-shortener', async (req, res) => {
	res.render('projects/rlnk.ejs', { title: 'Rlnk, der Link-Shortener - Projekte' });
});


router.get('/coding-blog', async (req, res) => {
	res.render('projects/blog.ejs', { title: 'Coding Blog - Projekte' });
});

router.get('/rexusmods', async (req, res) => {
	res.render('projects/rexusmods.ejs', { title: 'RexusMods - Projekte' });
});

module.exports = router;

