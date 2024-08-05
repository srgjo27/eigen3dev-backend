import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from '../../domain/entities/member.entity';
import { MemberRepository } from '../../domain/repositories/member.repository';
import { Book } from 'src/books/domain/entities/book.entity';

@Injectable()
export class MemberRepositoryImpl implements MemberRepository {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async onModuleInit() {
    const mockMembers = [
      {
        code: 'M001',
        name: 'Angga',
      },
      {
        code: 'M002',
        name: 'Ferry',
      },
      {
        code: 'M003',
        name: 'Putri',
      },
    ];

    for (const memberData of mockMembers) {
      const member = new Member();
      member.code = memberData.code;
      member.name = memberData.name;
      member.isPenalized = false;
      member.borrowedBooksCount = 0;
      await this.memberRepository.save(member);
    }
  }

  findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  findById(id: string): Promise<Member> {
    return this.memberRepository.findOne({ where: { id } });
  }

  findByCode(code: string): Promise<Member> {
    return this.memberRepository.findOne({ where: { code } });
  }

  save(member: Member): Promise<Member> {
    return this.memberRepository.save(member);
  }

  update(member: Member): Promise<Member> {
    return this.memberRepository.save(member);
  }
}
