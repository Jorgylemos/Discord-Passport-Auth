require('dotenv').config();
require('./strategies/discordstrategy');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('passport');
const db = require('./database/database');
const path = require('path');

db.then(() => console.log(`Connected to MongoDB.`)).catch(err => console.log(err));

// Routes
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');

app.use(session({
    secret: 'some random secret',
    resave: true,
    saveUninitialized: false,
    name: 'discord.oauth2'
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware Routes
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute);

app.get('/', isAuthorized, (req, res) => {
    res.render('home', {

    });
});


function isAuthorized(req, res, next) {
    if (req.user) {
        console.log("User is logged in.");
        console.log(req.user);
        res.redirect('/dashboard');
    } else {
        console.log("User is not logged in.");
        next();
    }
}

app.listen(PORT, () => console.log(`Agora ouvindo as requisições na porta ${PORT}!`));