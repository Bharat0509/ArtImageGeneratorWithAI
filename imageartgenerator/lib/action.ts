import {
    createPostMutation,
    generateImageMutation,
    getImagesQuery,
} from "@/graphql";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("http://127.0.0.1:4000/");

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        return await client.request(query, variables);
    } catch (error) {
        console.log(error, "ACTION_MAKE_GRAPH-QL-REQUEST_ERROR");
        throw error;
    }
};
type postDataType = {
    name: string;
    prompt: string;
    image: string;
};
export const getImages = () => {
    return makeGraphQLRequest(getImagesQuery);
};
export const generateImage = (prompt: String) => {
    return makeGraphQLRequest(generateImageMutation, { prompt });
};
export const createPost = (postData: postDataType) => {
    return makeGraphQLRequest(createPostMutation, { postData });
};
