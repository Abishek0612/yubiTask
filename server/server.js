const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
require('./db')


const userRoutes = require('./routes/userRoutes')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', userRoutes)
const PORT = process.env.PORT || 5000;



app.listen(PORT, console.log(`server is up and running on port ${PORT}`))