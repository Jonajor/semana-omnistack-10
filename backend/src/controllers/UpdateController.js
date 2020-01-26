const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async atualizar(request, response) {
        const { github_username, name, techs, latitude, longitude } = request.query;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            return response.json({ message: "Dev não encontrado" });
        }

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        dev = await Dev.updateOne({
            name,
            techs: techsArray,
            location,
        });

        return response.json(dev);

    }
}