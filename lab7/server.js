const express = require('express');
const app = express();
app.use(express.json());

const posts = []

app.post("/posts", (req, res) => {
    const post = {
        id: posts.length + 1,
        name: req.body["name"],
        content: req.body["content"],
        comments: []
    }
    console.log(`Added this new post: ${JSON.stringify(post)}`)
    posts.push(post)
    console.log(`All posts: ${JSON.stringify(posts)}`)
    res.status(201)
    res.end()
})

app.get("/posts", (req, res) => {
    console.log(`Fetching all posts: ${JSON.stringify(posts)}`)
    res.status(200)
    res.json(posts)
})

app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(p => p.id === id)

    if (!post) {
        res.status(404)
        return res.end()
    }

    console.log(`Fetched post ${id}: ${JSON.stringify(post)}`)
    res.status(200)
    res.json(post)
})

app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = posts.findIndex(p => p.id === id)

    if (index === -1) {
        res.status(404)
        return res.end()
    }

    console.log(`Deleting post ${id}: ${JSON.stringify(posts[index])}`)
    posts.splice(index, 1)

    console.log(`All posts after deletion: ${JSON.stringify(posts)}`)
    res.status(200)
    res.end()
})

app.put("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = posts.findIndex(p => p.id === id)

    if (index === -1) {
        res.status(404)
        return res.end()
    }

    const updatedPost = {
        id: id,
        name: req.body["name"],
        content: req.body["content"],
        comments: posts[index].comments || []
    }

    console.log(`Updating post ${id} to: ${JSON.stringify(updatedPost)}`)
    posts[index] = updatedPost

    res.status(200)
    res.end()
})

app.post("/posts/:id/comments", (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(p => p.id === id)

    if (!post) {
        res.status(404)
        return res.end()
    }

    const comment = {
        comment: req.body["comment"]
    }

    post.comments.push(comment)

    console.log(`Added comment to post ${id}: ${JSON.stringify(comment)}`)
    console.log(`All comments: ${JSON.stringify(post.comments)}`)

    res.status(201)
    res.end()
})

app.get("/posts/:id/comments", (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(p => p.id === id)

    if (!post) {
        res.status(404)
        return res.end()
    }

    console.log(`Comments for post ${id}: ${JSON.stringify(post.comments)}`)
    res.status(200)
    res.json(post.comments)
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})