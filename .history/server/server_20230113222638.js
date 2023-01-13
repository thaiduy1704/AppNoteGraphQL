import express from 'express'
import http from 'http'
import {ApolloServer} from '@apollo/server'
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer'


const app = express()
const httpServer = http.createServer(app)

const server =  new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[ApolloServer]
})