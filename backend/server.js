const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());

//contect to mongoose

app.listen(3001, () => {
	console.log('server is running in 3001');
});
