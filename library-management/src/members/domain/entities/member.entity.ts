import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('members')
export class Member extends BaseEntity {
  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ default: false })
  isPenalized: boolean;

  @Column({ default: 0 })
  borrowedBooksCount: number;
}
