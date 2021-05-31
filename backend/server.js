const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());
const password = process.env.DB_PASS;
const database = process.env.DB_DATABASE;

//contect to mongoose
mongoose.connect(
	`mongodb+srv://passwordcrud:${password}@crud.rpq4m.mongodb.net/${database}`,
	{ useNewUrlParser: true }
);
app.use('/', require('./routes/noteRoute'));

app.listen(3001, () => {
	console.log('server is running in 3001');
});
