import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dio';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
