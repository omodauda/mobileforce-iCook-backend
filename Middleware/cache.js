const client = require('../Helpers/redis');

function cache(req, res, next){
    const key = req.url;
    client.get(key, (err, data) => {
        if (err) throw err;
        if(data !== null){
            res
            .status(200)
            .json({
                status: "success",
                error: "",
                data: JSON.parse(data)
            })
        } else{
            next();
        }
        
    })
}

module.exports = cache;