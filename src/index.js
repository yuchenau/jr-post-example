const express = require('express');
const app = express();
app.use(express.json());

// 现在我们可以将它写在数组里, JavaScript 没有 List
// arrary push() 可向数组的末尾添加一个或多个元素，并返回新的长度 
// 存储数据的 array
const posts = [];
let currentID = 1;

app.get('/', function (req, res) {
    // res.json('hello world');
    res.send('Hello World');
})

// get all post
app.get('/posts', function(req, res) {
    res.send(posts);
})

// get post by id 
app.get('/posts/:id', function (req, res) {
    const { id } = req.params;
    const find = posts.find(function(i) {
        // 其中一个是字符串 string 另外一个是整型数
        return i.id === Number(id);
    });

    if (!find) {
        return res.sendStatus(404);
    };

    res.send(find);
})

// add a new post
app.post('/posts', function(req, res) {
    const { author, content} = req.body;
    const newPost = { author, content, id:currentID++ };
    posts.push(newPost);
    res.send(newPost);
})

// replace post by id 完整替换
app.put('/posts/:id', function(req, res) {
    const { id } = req.params;
    const { author, content} = req.body;
    const post = posts.find(function(i) {
        return i.id === Number(id);
    });
    if (!post) {
        res.sendStatus(404);
    }
    // 把元素取出来然后进行更新
    post.author = author;
    post.content = content;
    res.send(post);
})

// delete post by id
app.delete('posts/:id', function(req, res) {
    const { id } = req.params;
    const postIndex = posts.findIndex(function(i) {
        return i.id === Number(id);
    });
    if (postIndex === -1) {
        return res.sendStatus(404);
    };
    const deletedPost = posts.splice(postIndex, 1);
    res.send(deletedPost); 
})
 
app.listen(3000)