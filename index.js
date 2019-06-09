const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');


const app = express();
authRoutes(app);


const PORT = process.env.PORT || 5000
app.listen(PORT); // express tells node to listen to traffic on port 5000