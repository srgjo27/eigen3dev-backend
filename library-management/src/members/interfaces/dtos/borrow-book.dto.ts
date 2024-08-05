import { IsNotEmpty, IsUUID } from 'class-validator';

export class BorrowBookDto {
  @IsNotEmpty()
  @IsUUID()
  memberId: string;

  @IsNotEmpty()
  @IsUUID()
  bookId: string;
}
