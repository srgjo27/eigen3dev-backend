import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Book } from '../../domain/entities/book.entity';
import { CreateBookDto } from '../dtos/create-book.dto';
import { UpdateBookDto } from '../dtos/update-book.dto';
import { BookRepositoryImpl } from 'src/books/infrastructure/repositories/book.repository.impl';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookRepositoryImpl) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Get('code/:code')
  async findByCode(@Param('code') code: string): Promise<Book> {
    return this.bookService.findByCode(code);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.code = createBookDto.code;
    book.title = createBookDto.title;
    book.author = createBookDto.author;
    book.stock = createBookDto.stock;
    return this.bookService.save(book);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    const book = await this.bookService.findById(id);
    book.code = updateBookDto.code;
    book.title = updateBookDto.title;
    book.author = updateBookDto.author;
    book.stock = updateBookDto.stock;
    return this.bookService.update(book);
  }
}
