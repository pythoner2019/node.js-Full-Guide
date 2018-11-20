const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const errorController = require('./controllers/error');

// setting template engine:
app.set('view engine', 'ejs');
app.set('views', 'views');

// calling routes:
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


// Using middleware:
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);


// App listen:
app.listen(3000);
