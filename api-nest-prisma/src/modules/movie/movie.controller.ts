import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.types';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Post()
  async create(@Body() createMovieDto: Movie): Promise<{ message: string }> {
    try {
      const result = await this.movieService.createMovie(createMovieDto);
      return { message: result };
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get(':id')
  async getMovie(@Param('id') id: string) {
    return this.movieService.readMovie(Number(id));
  }

  @Get()
  async getMovies() {
    return this.movieService.readMovies();
  }

  @Patch(':id')
  async patchMovie(@Param('id') id: string, @Body() updateMovieDto: Movie) {
    console.log('body', Object.keys(updateMovieDto).length)
    return this.movieService.updateMovieSpecific(Number(id), updateMovieDto);
  }

  @Put(':id')
  async updateMovie(@Param('id') id: string, @Body() updateMovieDto: Movie) {
    return this.movieService.updateMovie(Number(id), updateMovieDto);
  }

  @Delete(':id')
  async deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(Number(id));
  }
}
