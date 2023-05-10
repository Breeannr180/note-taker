//create dependencies
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//create server
const app = express();
const PORT = 3000;

//set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Start the server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
});





