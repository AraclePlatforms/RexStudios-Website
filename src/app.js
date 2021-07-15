require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const password = process.env.MONGO_PASSWORD



//mongoose
mongoose.connect('mongodb+srv://dbUser:'+password+'@cluster0.yljgu.mongodb.net/RexStudios?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex: true})
.then(() => console.log('Connected with Database!'))
.catch((err)=> console.log(err));

// Routes
const projectsRoute = require('./routes/projects')
const sakumoRoute = require('./routes/sakumo')
const teamRoute = require('./routes/team')
const newsRoute = require('./routes/news')



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// Middleware Routes
app.use('/projekte', projectsRoute);
app.use('/sakumo', sakumoRoute);
app.use('/team', teamRoute);
app.use('/news', newsRoute);


app.get('/', async (req, res) => {
    res.render('home', { title: 'Home', homelink: true })
});


app.get('/community', async (req, res) => {
    res.render('community', { title: 'Discord Community', communitylink: true })
});

app.get('/dc', async (req, res) => {
    res.redirect('https://discord.gg/sxcJd5wmvK')
});

app.get('/discord', async (req, res) => {
    res.redirect('https://discord.gg/sxcJd5wmvK')
});

app.get('/intragalaxia', async (req, res) => {
    res.redirect('/projekte/intragalaxia')
});
app.get('/endless-space', async (req, res) => {
    res.redirect('/projekte/intragalaxia')
});
app.get('/linkshortener', async (req, res) => {
    res.redirect('/link-shortener')
});

app.get('/link-shortener', async (req, res) => {
    res.redirect('/projekte/link-shortener')
});

app.get('/impressum', async (req, res) => {
    res.render('impressum', { title: 'Impressum'})
});

app.get('/datenschutz', async (req, res) => {
    res.render('datenschutz', { title: 'Datenschutz'})
});

app.get('/endlessspace', async (req, res) => {
    res.redirect('https://rexstudios.ch/endless-space')
});

app.get('/sakumobot', async (req, res) => {
    res.redirect('/sakumo')
});

app.get('/contact', async (req, res) => {
    res.render('contact', { title: 'Kontakt', contactlink: true })
});

app.use(function(req, res, next) {
  res.status(404);

  if (req.accepts('html')) {
    res.render('404', { url: req.url, title: '404' });
    return;
  }

  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  res.type('txt').send('Not found');
});





app.listen(PORT, () => console.log(`Now listening to requests on port ${PORT}`));