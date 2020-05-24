const posts = [];
let currentID = 1;

function getAllPost() {
    return JSON.parse(JSON.stringify(posts));
}

function getPostById(id) {
    return posts.find(function(i) {
        return i.id === Number(id);
    })
}

function addPost(post) {
    const { author, content} = post;
    const newPost = { author, content, id:currentID++ };
    posts.push(newPost);
    return newPost;
}

function updatePostById(id, newPost) {
    const { author, content } = newPost;
    const post = posts.find(function(i) {
        return i.id === Number(id);
    });
    post.author = author;
    post.content = content;
    return post;
}

function deletePostById(id) {
    const postIndex = getPostIndexById(id);
    const deletedPost = posts.splice(postIndex, 1);
    return deletedPost;
}

function getPostIndexById(id) {
    return posts.findIndex(function(i) {
        return i.id === Number(id);
    });
}

function doesIdExists(id) {
    return getPostById(id) != -1;
}

module.exports = {
    getAllPost,
    addPost,
    getPostById,
    updatePostById,
    deletePostById,
    getPostIndexById,
    doesIdExists
}