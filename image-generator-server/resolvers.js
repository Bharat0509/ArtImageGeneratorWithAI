import { Configuration, OpenAIApi } from "openai";
import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
import Post from "./mongodb/models/post.js";
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    secure: true,
});
const resolvers = {
    Query: {
        images: async () => await Post.find().sort({ createdAt: -1 }),
    },
    Mutation: {
        generateImage: async (_, { prompt }) => {
            const aiResponse = await openai.createImage({
                prompt,
                n: 1,
                size: "1024x1024",
                response_format: "b64_json",
            });

            const image = aiResponse.data.data[0].b64_json;

            return { prompt, img: image };
        },
        createPost: async (_, { PostData }) => {
            try {
                const cloudData = await cloudinary.uploader.upload(
                    PostData.image,
                    {
                        width: "1024",
                        height: "1024",
                        crop: "scale",
                        folder: "imageGenerator",
                        timeout: 300000,
                        filename_override: PostData.prompt,
                    }
                );

                const { secure_url, public_id } = cloudData;

                const post = new Post({
                    name: PostData.name,
                    prompt: PostData.prompt,
                    image: secure_url,
                    public_id: public_id,
                });
                await post.save();

                return { name: PostData.name, url: secure_url };
            } catch (error) {
                console.log("CLOUDINARY_REQUEST", error);
                return null;
            }
        },
    },
};

export default resolvers;
