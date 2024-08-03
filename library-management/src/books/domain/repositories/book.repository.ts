import { Book } from '../entities/book.entity';

export interface BookRepository {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book>;
  findByCode(code: string): Promise<Book>;
  save(book: Book): Promise<Book>;
  update(book: Book): Promise<Book>;
}
