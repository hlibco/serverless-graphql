import * as server from 'apollo-server-lambda'
import { makeExecutableSchema } from 'graphql-tools'
import { schema } from '../schema'
import { resolvers } from '../resolvers'


const myGraphQLSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
  logger: console
})

export function graphqlHandler (event, context, callback) {
  function callbackFilter (error, output) {
    output.headers['Content-Type'] = 'application/json'
    output.headers['Access-Control-Allow-Origin'] = '*' // Required for CORS support to work
    output.headers['Access-Control-Expose-Headers'] = 'X-Amzn-Remapped-Authorization'
    output.headers['Access-Control-Allow-Credentials'] = true // Required for cookies, authorization headers with HTTPS

    callback(error, output)
  }

  const handler = server.graphqlLambda({ schema: myGraphQLSchema })
  return handler(event, context, callbackFilter)
}

export const graphiqlHandler = server.graphiqlLambda({ endpointURL: '/graphql' })
