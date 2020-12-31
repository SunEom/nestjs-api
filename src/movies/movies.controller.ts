import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieID: string) {
    return `This will return one movie with the id : ${movieID}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieID: string) {
    return `This will delete movie with the id ${movieID}`;
  }

  @Patch('/:id')
  path(@Param('id') movieID: string) {
    return `This will patch movie with the id ${movieID}`;
  }
}
