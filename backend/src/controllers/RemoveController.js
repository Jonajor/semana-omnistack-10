const Dev = require('../models/Dev');

module.exports = {
    async remove(request, response) {
        const { github_username } = request.query;

        let dev = await Dev.findOneAndDelete({ github_username });

        if (!dev) {
            return response.json({ message: "Dev não encontrado" });
        }
        return response.json(dev);

    }
}