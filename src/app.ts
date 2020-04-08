import express from 'express';
const graphqlHTTP = require('express-graphql');
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import lusca from 'lusca';
import path from 'path';

// Controllers (route handlers)
import { Sequelize } from 'sequelize-typescript';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';

// Create Express server
const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [ depthLimit(7) ],
});

// Sequelize connect mysql
const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/simpleTest-dev');
sequelize.addModels([ path.resolve(__dirname, './models/') ]);

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use('*', cors());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

server.applyMiddleware({ app, path: '/graphql' });

/**
 * Primary app routes.
 */
// app.get("/", homeController.index);
// app.get("/api", apiController.getApi);
app.get(
  '/',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

/**
 * OAuth authentication routes. (Sign in)
 */

export default app;
