const postModel = require('../models/post');

function getAllpost(req, res) {
    res.send(postModel.getAllpost());
}

function getPostById (req, res) {
    const { id } = req.params;
    const post = postModel.getPostById(id);
    res.send(post);
}

function addPost(req, res) {
    const { author, content } = req.body;
    // validation
    const newPost = postModel.addPost({ author, content });
    res.send(newPost);
}

function updatePostById (req, res) {
    const { id } = req.params;
    const { author, content } = req.body;
    const post = postModel.updatePostById(id, { author, content });
    res.send(post);
}

function deletePostById (req, res) {
    const { id } = req.params;
    const deletedPost = postModel.deletePostById( id );
    res.send(deletedPost);
}

module.exports = {
    getAllpost,
    getPostById,
    addPost,
    updatePostById,
    deletePostById
}