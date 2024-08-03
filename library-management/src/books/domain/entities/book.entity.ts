import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('books')
export class Book extends BaseEntity {
  @Column()
  code: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ default: 1 })
  stock: number;

  @Column({ default: false })
  isBorrowed: boolean;
}
