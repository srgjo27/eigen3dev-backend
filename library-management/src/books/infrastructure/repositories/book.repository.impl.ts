import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../domain/entities/book.entity';
import { BookRepository } from '../../domain/repositories/book.repository';

@Injectable()
export class BookRepositoryImpl implements BookRepository {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async onModuleInit() {
    const mockBooks = [
      {
        code: 'JK-45',
        title: 'Harry Potter',
        author: 'J.K Rowling',
        stock: 1,
      },
      {
        code: 'SHR-1',
        title: 'A Study in Scarlet',
        author: 'Arthur Conan Doyle',
        stock: 1,
      },
      {
        code: 'TW-11',
        title: 'Twilight',
        author: 'Stephenie Meyer',
        stock: 1,
      },
      {
        code: 'HOB-83',
        title: 'The Hobbit, or There and Back Again',
        author: 'J.R.R. Tolkien',
        stock: 1,
      },
      {
        code: 'NRN-7',
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'C.S. Lewis',
        stock: 1,
      },
    ];

    for (const bookData of mockBooks) {
      const book = new Book();
      book.code = bookData.code;
      book.title = bookData.title;
      book.author = bookData.author;
      book.stock = bookData.stock;
      book.isBorrowed = false;
      await this.bookRepository.save(book);
    }
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findById(id: string): Promise<Book> {
    return this.bookRepository.findOne({ where: { id } });
  }

  findByCode(code: string): Promise<Book> {
    return this.bookRepository.findOne({ where: { code } });
  }

  save(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  update(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }
}
