import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectDB from "./mongodb/connect.js";
import * as dotenv from "dotenv";
// import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
dotenv.config();

const typeDefs = `
  type Img
  { _id:String
    name:String
    prompt:String
    image:String
    public_id:String
  }
  type GeneratedImg
  {
    
    prompt:String
    img:String
    
  }
  type PostData
  {
    url:String
    name:String
  }
  type Query 
  {
    images:[Img]
  }
  type Mutation
  {
    generateImage(prompt:String):GeneratedImg
    createPost(PostData:PostInput):PostData
  }
  input PostInput
  {
    name:String
    prompt:String
    image:String
  }

`;
export default typeDefs;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
connectDB(process.env.MONGO_URI);
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
