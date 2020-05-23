const posts = [];
let currentID = 1;

function getAllPost() {
    return JSON.parse(JSON.stringify(posts));
}

function addPost(post) {
    // 不再从 req.body 中取数据了，改为从 post 中取数据
    const { author, content} = post;
    const newPost = { author, content, id:currentID++ };
    posts.push(newPost);
    return newPost;
}

function getPostById(id) {
    return posts.find(function(i) {
        return i.id === Number(id);
    })
}

function updatePostById(id, newPost) {
    // 不再从 req.body 中取出数据了，改为从 newPost 中取数据
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

module.exports = {
    getAllPost,
    addPost,
    getPostById,
    updatePostById,
    deletePostById,
    getPostIndexById
}