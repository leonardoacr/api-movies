import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteMovie = async (receivedId: number) => {
  try {
    const movie = await prisma.movies.delete({
      where: {
        id: receivedId
      }
    });
    return movie;
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting movie from the database');
  }
}
