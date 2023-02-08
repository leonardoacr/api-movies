import { Router } from 'express';
import * as moviesController from '../controllers/moviesController';

const router = Router();

// Movies Routers

// Create new movie
router.post('/movies', moviesController.processCreateMovie);

// Read specific movie
router.get('/movies/:id', moviesController.processReadMovie);
// Read all movies
router.get('/movies', moviesController.processReadMovies);

// Update movie
router.put('/movies/:id', moviesController.processUpdateMovie);

// Delete movie
router.delete('/movies/:id', moviesController.processDeleteMovie);

export default router;
