import { Test, TestingModule } from '@nestjs/testing';
import { BookRepository } from '../../domain/repositories/book.repository';
import { Book } from '../../domain/entities/book.entity';
import { BookRepositoryImpl } from 'src/books/infrastructure/repositories/book.repository.impl';

describe('BookService', () => {
  let service: BookRepositoryImpl;
  let repository: BookRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookRepositoryImpl,
        {
          provide: 'BookRepository',
          useValue: {
            findAll: jest.fn(),
            findById: jest.fn(),
            findByCode: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<BookRepositoryImpl>(BookRepositoryImpl);
    repository = module.get<BookRepository>('BookRepository');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all books', async () => {
    const book = new Book();
    jest.spyOn(repository, 'findAll').mockResolvedValue([book]);
    expect(await service.findAll()).toEqual([book]);
  });

  // Add more tests for each method
});
