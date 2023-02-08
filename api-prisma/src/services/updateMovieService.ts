import { PrismaClient } from '@prisma/client';
import { Movie } from '../interfaces/movie.interface';

const prisma = new PrismaClient();

export const updateMovie = async (movie: Movie, id: number): Promise<void> => {
  try {
    await prisma.movies.update({
      where: { id },
      data: movie,
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Error updating movie with id: ${id} in the database`);
  }
};

