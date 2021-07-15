const express = require('express')
const router = require('express').Router();
const Article = require('./../models/article')
const options = { day: 'numeric', month: 'long', year: 'numeric' };

router.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc'})
    res.render('news.ejs', { title: 'News', newslink: true, articles: articles, options: options });
});

router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  const articles = await Article.find().sort({ createdAt: 'desc'})
  if (article == null) res.redirect('/news')
  res.render('show.ejs', { title: article.title + ' • News', newslink: true, article: article, articles: articles, options: options })
})

module.exports = router;


