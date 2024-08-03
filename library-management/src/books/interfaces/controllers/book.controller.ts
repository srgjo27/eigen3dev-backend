import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../../application/services/book.service';
import { Book } from '../../domain/entities/book.entity';
import { CreateBookDto } from '../dtos/create-book.dto';

@Controller('books')
@ApiTags('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

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
    return this.bookService.create(book);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: CreateBookDto,
  ): Promise<Book> {
    const book = await this.bookService.findById(id);
    book.code = updateBookDto.code;
    book.title = updateBookDto.title;
    book.author = updateBookDto.author;
    book.stock = updateBookDto.stock;
    return this.bookService.update(book);
  }
}
