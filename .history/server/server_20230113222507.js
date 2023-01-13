import express from 'express'
import http from 'http'
import {ApolloServer} from '@apollo/server'


const app = express()
const httpServer = http.createServer(app)