const searchService = require('../services/searchServices');

module.exports = {
    search: async (req, res) => {
        const { query } = req.query;

        try {
            const searchResults = await searchService.search(query);
            res.json(searchResults);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
