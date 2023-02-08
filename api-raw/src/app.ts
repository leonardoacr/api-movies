import express from 'express';

const app = express();

// Express and EJS
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //enable express to parse URL-encoded body i.e. info from HTML form

import userRoutes from './routes/userRoutes.js';
import moviesRoutes from './routes/moviesRoutes.js';

app.use(userRoutes); // routes
app.use(moviesRoutes); // routes

export default app;
