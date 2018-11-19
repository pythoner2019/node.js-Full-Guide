const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const expressHbs = require('express-handlebars');
const app = express();

// setting template engine:
app.engine(
    'handlebars', 
    expressHbs({
        layoutsDir: 'views/layouts/', 
        defaultLayout: 'main-layout',
        extname: 'handlebars'
    })
);
app.set('view engine', 'handlebars');
app.set('views', 'views');

// calling routes:
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');




// Using middleware:
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Error Page', message: 'Page Not Found' })
});




// App listen:
app.listen(3000);
