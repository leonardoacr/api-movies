import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService, PrismaService],
  exports: [MovieService]
})
// eslint-disable-next-line prettier/prettier
export class MovieModule { }
