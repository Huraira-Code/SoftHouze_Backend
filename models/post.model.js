import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true,
            unique: true
        },
        image:{
            type: String,
            default: 'https://www.salesforce.com/ca/blog/wp-content/uploads/sites/12/2023/10/anatomy-of-a-blog-post-deconstructed-open-graph.jpg?w=768&h=401'
        },
        excerpt: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        readTime: {
            type: String,
            default: ''
        },
        tags: {
            type: [String],
            default: []
        },
        featured: {
            type: Boolean,
            default: false
        },
        category:{
            type: String,
            default: 'uncategorized'
        }
    }, {timestamps: true}
)

const Post = mongoose.model('Post', postSchema)
export default Post 