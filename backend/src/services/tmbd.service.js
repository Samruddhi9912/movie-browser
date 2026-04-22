const axios = require('axios');

async function searchMovies(query) {
    try {
        const url = `${process.env.TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`;

        const response = await axios.get(url);

        return response.data;

    } catch (error) {
        console.error("TMDB Error:", error.message);
        throw error;
    }
}

module.exports = { searchMovies };