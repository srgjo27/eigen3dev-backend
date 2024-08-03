import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { MemberRepository } from '../../domain/repositories/member.repository';
import { Member } from '../../domain/entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @Inject('MemberRepository')
    private readonly memberRepository: MemberRepository,
  ) {}

  async findAll(): Promise<Member[]> {
    return this.memberRepository.findAll();
  }

  async findById(id: string): Promise<Member> {
    const member = await this.memberRepository.findById(id);
    if (!member) {
      throw new NotFoundException(`Member with id ${id} not found`);
    }
    return member;
  }

  async findByCode(code: string): Promise<Member> {
    const member = await this.memberRepository.findByCode(code);
    if (!member) {
      throw new NotFoundException(`Member with code ${code} not found`);
    }
    return member;
  }

  async create(member: Member): Promise<Member> {
    return this.memberRepository.save(member);
  }

  async update(member: Member): Promise<Member> {
    return this.memberRepository.update(member);
  }
}
