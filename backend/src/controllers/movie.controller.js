const tmbdService = require('../services/tmbd.service');

async function searchMovies(req,res) {
    try{
        const query = req.query.q;

        if(!query){
            return res.status(400).json({
                message:"Query is required"
            });
        }
        const data = await tmbdService.searchMovies(query);
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    searchMovies
}