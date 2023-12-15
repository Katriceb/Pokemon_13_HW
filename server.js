require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const jsxViewEngine = require('jsx-view-engine');
const pokemon = require('./models/pokemon');


//Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Middleware
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});


app.get('/pokemon/', async (req, res) => {
  res.render('Index', { pokemons: pokemons });
});

app.get('/pokemon/:id', async(req, res) => {
  const id = req.params.id;
  res.render('Show', { pokemon: pokemon });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});