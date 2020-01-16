const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// Index => mostrar lista
// show => unico dev
// stone => criar
// update => alterar
// destroy => deletar

module.exports = {
	async index(request, response) {
		const devs = await Dev.find();

		return response.json(devs);
	},

	async store(request, response) {
		const { github_username, techs, latitude, longitude } = request.body;

		let dev = await Dev.findOne({ github_username });

		if (!dev) {
			const apiGitHubResponse = await axios.get(`https://api.github.com/users/${github_username}`);
		
			// name = login => se não exister um valor para name, pega o valor do login, pois é obrigatório ter um login no github
			const { name = login, avatar_url, bio } = apiGitHubResponse.data;

			const techsArray = parseStringAsArray(techs);

			const location = {
				type: "Point",
				coordinates: [longitude, latitude],
			}

			dev = await Dev.create({
				github_username,
				name,
				avatar_url,
				bio,
				techs: techsArray,
				location
			});
		}

		return response.json(dev);
	}
};