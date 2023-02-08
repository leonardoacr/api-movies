import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { createMovie } from '../services/createMovieService.js';
import { deleteMovie } from '../services/deleteMovieService.js';
import { readMovie, readMovies } from '../services/readMovieService.js';
import { updateMovie } from '../services/updateMovieService.js';

const prisma = new PrismaClient();

export const processCreateMovie = async (req: Request, res: Response) => {
  const movie = req.body;
  console.log(movie);

  try {
    await createMovie(movie)
    console.log('Movie added to the database');
    res.status(200).json({ message: 'Movie added to the database' });
    await prisma.$disconnect();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res
      .status(500)
      .json({
        message: err.message
      });
    await prisma.$disconnect();
  }
};

export const processReadMovie = async (req: Request, res: Response) => {
  console.log('Read movie from the database');
  const receivedId = Number(req.params.id);
  try {
    const movie = await readMovie(receivedId);
    res.status(200).json({ movie });
    await prisma.$disconnect();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error reading movie in the database' });
    await prisma.$disconnect();
  }
};


export const processReadMovies = async (req: Request, res: Response) => {
  console.log('Read movies from the database');
  try {
    const movies = await readMovies();
    res.status(200).json({ movies });
    await prisma.$disconnect();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error reading movies in the database' });
    await prisma.$disconnect();
  }
};

export const processUpdateMovie = async (req: Request, res: Response) => {
  const movie = req.body;
  const receivedId = Number(req.params.id);
  console.log('id: ' + receivedId);
  console.log('Movie to update: ' + JSON.stringify(movie));

  try {
    await updateMovie(movie, receivedId);
    console.log('Movie updated in the database');
    res.status(200).json({ message: 'Movie updated in the database' });
    await prisma.$disconnect();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating movie in the database' });
    await prisma.$disconnect();
  }
};

export const processDeleteMovie = async (req: Request, res: Response) => {
  const receivedId = Number(req.params.id);
  console.log('id: ' + receivedId);

  try {
    await deleteMovie(receivedId)
    console.log('Movie deleted in the database');
    res.status(200).json({ message: 'Movie deleted in the database' });
    await prisma.$disconnect();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting movie in the database' });
    await prisma.$disconnect();
  }
};
