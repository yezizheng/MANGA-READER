import { ApolloServer } from "apollo-server-express";
import express from "express";
import bodyParser from "body-parser";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";

const port = process.env.PORT || 3000;

const apolloServer = new ApolloServer({
    resolvers,
    typeDefs
});

const app = express();

apolloServer.applyMiddleware({ app, path: "/graphql"});


app.all("*", (req, res) => {
    res.status(404).json({status: "Missing endpoint"});
});

app.listen(port, "0.0.0.0", 
    () => console.log(`Services listening on ${port}`));