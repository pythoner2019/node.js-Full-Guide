const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const errorController = require('./controllers/error');

app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});