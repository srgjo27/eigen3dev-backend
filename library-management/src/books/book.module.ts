import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './domain/entities/book.entity';
import { BookController } from './interfaces/controllers/book.controller';
import { BookRepositoryImpl } from './infrastructure/repositories/book.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookRepositoryImpl],
})
export class BookModule {}
