import { Member } from '../entities/member.entity';

export interface MemberRepository {
  findAll(): Promise<Member[]>;
  findById(id: string): Promise<Member>;
  findByCode(code: string): Promise<Member>;
  save(member: Member): Promise<Member>;
  update(member: Member): Promise<Member>;
}
