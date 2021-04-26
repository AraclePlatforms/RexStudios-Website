require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser')



// Routes

const endlessRoute = require('./routes/endless')
const sakumoRoute = require('./routes/sakumo')
const teamRoute = require('./routes/team')
const newsRoute = require('./routes/news')




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// Middleware Routes

app.use('/endless-space', endlessRoute);
app.use('/sakumo', sakumoRoute);
app.use('/team', teamRoute);
app.use('/news', newsRoute);


app.get('/', async (req, res) => {
    res.render('home', { title: 'Home' })
});

app.get('/contact', async (req, res) => {
    res.render('contact', { title: 'Kontakt' })
});

app.listen(PORT, () => console.log(`Now listening to requests on port ${PORT}`));