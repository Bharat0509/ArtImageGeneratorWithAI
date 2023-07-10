import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectDB from "./mongodb/connect.js";
import * as dotenv from "dotenv";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
dotenv.config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
connectDB(process.env.MONGO_URI);
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
