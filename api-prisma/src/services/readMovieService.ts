import { PrismaClient } from '@prisma/client';
import { Movie } from './../interfaces/movie.interface';

const prisma = new PrismaClient();

export const readMovie = async (id: number): Promise<Movie | null> => {
  try {
    const movie = await prisma.movies.findUnique({
      where: {
        id: id
      }
    });
    return movie;
  } catch (error) {
    console.error(error);
    throw new Error('Error reading movie from the database');
  }
}

export const readMovies = async (): Promise<Movie[]> => {
  try {
    const movies = await prisma.movies.findMany();
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error('Error reading movies from the database');
  }
};