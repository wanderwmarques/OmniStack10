const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
	async index(request,response) {
		const { latitude, logitude, techs } = request.query;

		const techsArray = parseStringAsArray(techs);

		const devs = await Dev.find({
			techs: {
				$in: techsArray,
			},
			location: {
				$near: {
					$geometry: {
						type: 'Point',
						coordinates:  [logitude, latitude],
					},
					$maxDistance: 10000,
				},
			},
		})
		
		return response.json({ devs });
	}
}