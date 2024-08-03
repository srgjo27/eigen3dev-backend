import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { BookRepository } from '../../domain/repositories/book.repository';
import { Book } from '../../domain/entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @Inject('BookRepository')
    private readonly bookRepository: BookRepository,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }

  async findById(id: string): Promise<Book> {
    const book = await this.bookRepository.findById(id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  async findByCode(code: string): Promise<Book> {
    const book = await this.bookRepository.findByCode(code);
    if (!book) {
      throw new NotFoundException(`Book with code ${code} not found`);
    }
    return book;
  }

  async create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async update(book: Book): Promise<Book> {
    return this.bookRepository.update(book);
  }
}
