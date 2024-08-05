import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './domain/entities/member.entity';
import { MemberController } from './interfaces/controllers/member.controller';
import { MemberRepositoryImpl } from './infrastructure/repositories/member.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  controllers: [MemberController],
  providers: [MemberRepositoryImpl],
})
export class MemberModule {}
