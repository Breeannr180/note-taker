//create dependencies
const express = require('express');
const path = require('path');
const apiRoutes = require('./Main/routes/apiRoutes');
const htmlRoutes = require('./Main/routes/htmlRoutes');
//create server
const app = express();
const PORT = process.env.PORT || 3000;
//set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// require('./Main/routes/apiRoutes')(app);
// require('./Main/routes/htmlRoutes')(app);

//Start the server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
    // console.log(`Server listening on PORT ${PORT}`);
});
  
  
  
  