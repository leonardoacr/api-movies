import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../prisma.service';
import { Movie } from './movie.types';

@Injectable()
export class MovieService {
    constructor(private prisma: PrismaService) { }

    async createMovie(movie: Movie): Promise<string> {
        try {
            const createdMovie = await this.prisma.movies.create({
                data: {
                    title: movie.title,
                    release_year: movie.release_year,
                    genre: movie.genre
                }
            });
            let result = '';
            createdMovie !== null ? result = 'Movie added to the database' : result = 'Error adding movie to the database';
            return result;
        } catch (err) {
            let titleRequired = '';
            if (err.message.includes('title')) {
                titleRequired = ': title already exists on the database';
            }
            throw new Error('Error adding movie to the database' + titleRequired);
        }
    }

    async readMovie(id: number): Promise<Movie | null> {
        try {
            const movie = await this.prisma.movies.findUnique({
                where: {
                    id: id
                }
            });
            console.log('movie', movie);
            return movie;
        } catch (error) {
            console.error(error);
            throw new Error('Error reading movie from the database');
        }
    }

    async readMovies(): Promise<Movie[]> {
        try {
            const movies = await this.prisma.movies.findMany();
            return movies;
        } catch (error) {
            console.error(error);
            throw new Error('Error reading movies from the database');
        }
    }

    async updateMovieSpecific(id: number, movieData: Movie): Promise<string> {
        try {
            const updatedMovie = await this.prisma.movies.update({
                where: {
                    id: id
                },
                data: {
                    release_year: movieData.release_year,
                }
            });
            let result = '';
            if (Object.keys(movieData).length === 0 && movieData.constructor === Object) {
                result = 'Nothing to update';
            } else {
                updatedMovie !== null ? result = 'Movie updated on the database' : result = 'Error updating movie on the database';
            }
            if (Object.keys(movieData).length > 1) {
                result = 'Only one topic can be updated with PATCH, please use UPDATE instead';
            }
            return result;
        } catch (err) {
            throw new Error('Error updating movie on the database');
        }
    }

    async updateMovie(id: number, movieData: Movie): Promise<string> {
        try {
            const updatedMovie = await this.prisma.movies.update({
                where: {
                    id: id
                },
                data: movieData,
            });
            let result = '';
            if (Object.keys(movieData).length === 0 && movieData.constructor === Object) {
                result = 'Nothing to update';
            } else {
                updatedMovie !== null ? result = 'Movie updated on the database' : result = 'Error updating movie on the database';
            }
            return result;
        } catch (err) {
            throw new Error('Error updating movie on the database');
        }
    }

    async deleteMovie(id: number): Promise<string> {
        try {
            const deletedMovie = await this.prisma.movies.delete({
                where: {
                    id: id
                }
            });
            let result = '';
            deletedMovie !== null ? result = 'Movie deleted from the database' : result = 'Error deleting movie from the database';
            return result;
        } catch (err) {
            throw new Error('Error deleting movie from the database');
        }
    }
}
