import { IsNotEmpty, IsUUID } from 'class-validator';

export class ReturnBookDto {
  @IsNotEmpty()
  @IsUUID()
  memberId: string;

  @IsNotEmpty()
  @IsUUID()
  bookId: string;
}
