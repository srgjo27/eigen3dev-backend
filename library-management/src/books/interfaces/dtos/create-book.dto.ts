import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;
}
