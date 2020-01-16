const mongoose = require('mongoose');
const PointSchama = require('./utils/PointSchema');

const DevSchema  = new mongoose.Schema({
	name: String,
	github_username: String,
	biografia: String,
	avatar_url: String,
	techs: [String], // Campo de tecnlogias armazema mais de uma string, por isso usei o array de string.
	location: {
		type: PointSchama,
		index: '2dsphere',
	},
});

module.exports = mongoose.model('Dev', DevSchema);