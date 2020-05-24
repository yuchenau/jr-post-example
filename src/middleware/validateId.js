const postModel = require('../models/post');

module.exports = function (req, res, next) {
    let { id } = req.params;
    id = Number(id);
    if (!postModel.doesIdExists(id)){
        return res.status(404).send({ error: 'post id not found' });
    }
    req.params.id = id;
    next();
}