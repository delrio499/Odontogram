const path = require ('path');
const express = require ('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express ();


//conecting to database

mongoose.connect('mongodb://0.0.0.0:27017/', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    


})
    .then(db => console.log('Db is connected'))
    .catch(err => console.error(err));
//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));




//static files
app.use('/public', express.static(path.join(__dirname+ ('/public'))) );
app.use(express.static('files'));
// bootstrap 


// routes
app.use('/', indexRoutes);
// links internos
app.get('/pacientes', (req, res) => {
    res.render(__dirname+'/views/pacientes', { });
   });
   app.get('/add', (req, res) => {
    res.render(__dirname+'/views/add', { });
   });

//starting the server
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
})