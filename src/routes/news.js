const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('news.ejs', { title: 'News' });
});

router.get('/alles-wird-neu', (req, res) => {
    res.render('news-article.ejs', { title: 'Alles wird Neu | News' });
});

module.exports = router;


