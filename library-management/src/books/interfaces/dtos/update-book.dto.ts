import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsInt()
  stock: number;
}
