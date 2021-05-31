const { Router } = require('express');
const mongoose = require('mongoose');

const nostesSchema = {
	title: String,
	content: String,
};

const Note = mongoose.model('Note', nostesSchema);

module.export = Note;
