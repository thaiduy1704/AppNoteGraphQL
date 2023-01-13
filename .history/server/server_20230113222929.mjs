import express from 'express'
import http from 'http'
import {ApolloServer} from '@apollo/server'
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer'
import bodyParser from 'body-parser'
import {expressMiddleware} from '@apollo/server/express4'


const app = express()
const httpServer = http.createServer(app)

const typeDefs = '';
const resolvers = {};

const server =  new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[ApolloServerPluginDrainHttpServer({httpServer})]
})

await server.start();

//middleware

app.use(cors(),bodyParser.json(),expressMiddleware(server))