const express = require('express');
const { getAllpost, getPostById, addPost, updatePostById, deletePostById } =
require ('../controllers/posts')
const validateId = require('../middleware/validateId');

const router = express.Router();

router.get('/:id', validateId, getPostById);

router.get('/', getAllpost);
router.post('/', addPost);
router.put('/:id', validateId, updatePostById);
router.delete('/:id', validateId, deletePostById);

module.exports = router;