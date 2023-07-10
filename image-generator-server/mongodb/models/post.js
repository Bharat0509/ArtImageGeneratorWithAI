import mongoose from "mongoose";
const PostSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        prompt: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        public_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
const Post = mongoose.model("Post", PostSchema);
export default Post;
