const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('team.ejs', { title: 'Das Team' });
});



module.exports = router;


