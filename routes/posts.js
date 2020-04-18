const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); 

// this get the posts
router.get('/', async (req, res) => {
        try {
            const posts = await Post.find();
            res.json(posts);
        }catch(err){
            res.json({ message: err});
        }
});

// this one submit a posts
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description:req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err });
    }
});

//Specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch (err) {
        res.json({  message:err });
    }
});

//Delete Post
router.delete('/:postId', async (req,res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId})
        res.json(removePost);
    }catch (err) {
        res.json({ message:err });
    }
})

//Update Post
router.patch('/:postId', async (req,res) => {
    try{
      const updatedPost = await Post.updateOne(
          { _id: req.params.postId}, 
          {$set: {title: req.body.title}} // this is to specify what to change
          );
          res.json(updatedPost);
    }catch (err) {
        res.json({ message:err });
    }

})

module.exports = router;