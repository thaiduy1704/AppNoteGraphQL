import express from 'express'
import http from 'http'
import {ApolloServer} from '@apollo/server'
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer'
import bodyParser from 'body-parser'
import {expressMiddleware} from '@apollo/server/express4'
import { resolve } from 'path'


const app = express()
const httpServer = http.createServer(app)

const typeDefs = #graphql
`#graphql`;
const resolvers = {};
/*Kieu du lieu cua graphql 
    type Query => truy van tu phia client
    type Mutation => update du lieu
    type Subscription => update du lieu theo kieu real time

    => typeDefs la dung de xem coi du lieu la kieu gi
*/

//schema
//resolver dung de xu ly du lieu va return du lieu cho client dua theo query cua client gui cho server
const server =  new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[ApolloServerPluginDrainHttpServer({httpServer})]
})

await server.start();

//middleware
app.use(cors(),bodyParser.json(),expressMiddleware(server))

await new Promise((resolve)=>httpServer.listen({port:4000},resolve))
console.log("Server ready at http://localhost:4000");