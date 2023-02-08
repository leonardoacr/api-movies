import { Request, Response } from 'express'
import { createMovie } from '../data/models/createMovie.js'
import { deleteMovie } from '../data/models/deleteMovie'
import { readMovie, readMovies } from '../data/models/readMovie'
import { updateMovie } from '../data/models/updateMovie'

export const processCreateMovie = async (req: Request, res: Response) => {
    console.log(req.body)
    const movie = req.body

    await createMovie(movie)
        .then(() => {
            console.log('Movie added to the database');
            res.status(200).json({ message: 'Movie added to the database' });
        })
        .catch((err: Error) => {
            console.error(err);
            res.status(500).json({ message: 'Error adding movie to the database' });
        })
}

export const processReadMovie = async (req: Request, res: Response) => {
    console.log('Read movie from the database');
    const receivedId = req.params.id;
    const movie = await readMovie(receivedId);
    res.status(200).json({ movie });
}

export const processReadMovies = async (req: Request, res: Response) => {
    console.log('Read movies from the database');
    const movies = await readMovies();
    res.status(200).json({ movies });
}

export const processUpdateMovie = async (req: Request, res: Response) => {
    const movie = req.body
    const receivedId = req.params.id
    console.log('id: ' + receivedId)
    console.log('Movie to update: ' + JSON.stringify(movie))

    await updateMovie(movie, receivedId)
        .then(() => {
            console.log('Movie updated in the database');
            res.status(200).json({ message: 'Movie updated in the database' });
        })
        .catch((err: Error) => {
            console.error(err);
            res.status(500).json({ message: 'Error updating movie in the database' });
        })
}

export const processDeleteMovie = async (req: Request, res: Response) => {
    const receivedId = req.params.id
    console.log('id: ' + receivedId)

    await deleteMovie(receivedId)
        .then(() => {
            console.log('Movie deleted from the database');
            res.status(200).json({ message: 'Movie deleted from the database' });
        })
        .catch((err: Error) => {
            console.error(err);
            res.status(500).json({ message: 'Error deleting movie from the database' });
        })
}