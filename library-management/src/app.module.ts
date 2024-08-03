import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/domain/entities/book.entity';
import { Member } from './members/domain/entities/member.entity';
import { BookRepositoryImpl } from './books/infrastructure/repositories/book.repository.impl';
import { MemberRepositoryImpl } from './members/infrastructure/repositories/member.repository.impl';
import { BookController } from './books/interfaces/controllers/book.controller';
import { MemberController } from './members/interfaces/controllers/member.controller';
import { BookService } from './books/application/services/book.service';
import { MemberService } from './members/application/services/member.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Book, Member],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Book, Member]),
  ],
  controllers: [BookController, MemberController],
  providers: [
    BookService,
    MemberService,
    {
      provide: 'BookRepository',
      useClass: BookRepositoryImpl,
    },
    {
      provide: 'MemberRepository',
      useClass: MemberRepositoryImpl,
    },
  ],
})
export class AppModule {}
