const axios = require('axios')

const BASE_URL = process.env.TMDB_BASE_URL
const API_KEY = process.env.TMDB_API_KEY

async function searchMovies(query){
    try{
        const response = await axios.get('${BASE_URL}/search/movie',{
            params: {
                api_key: API_KEY,
                query: query
            }
        })
        return response.data
    }
    catch{

    }
}