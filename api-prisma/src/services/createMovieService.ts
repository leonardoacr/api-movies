import { PrismaClient } from '@prisma/client';
import { Movie } from '../interfaces/movie.interface';

const prisma = new PrismaClient();

export async function createMovie(movies: Movie): Promise<Movie | null> {
  try {
    const movie = await prisma.movies.create({
      data: {
        title: movies.title,
        release_year: movies.release_year,
        genre: movies.genre
      }
    });

    return movie;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    let titleRequired = '';
    if (err.message.includes('title')) {
      titleRequired = ': title already exists on the database';
    }
    throw new Error('Error adding movie to the database' + titleRequired);
  }
}
