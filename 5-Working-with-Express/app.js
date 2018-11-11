const express = require('express');
const bodyParser = require('body-parser');      // for req.body
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop');



app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);
app.use(shopRoutes);





const port = 3000;
app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
});

