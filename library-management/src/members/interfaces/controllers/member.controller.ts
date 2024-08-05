import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Member } from '../../domain/entities/member.entity';
import { CreateMemberDto } from '../dtos/create-member.dto';
import { MemberRepositoryImpl } from 'src/members/infrastructure/repositories/member.repository.impl';

@Controller('members')
@ApiTags('members')
export class MemberController {
  constructor(private readonly memberService: MemberRepositoryImpl) {}

  @Get()
  async findAll(): Promise<Member[]> {
    return this.memberService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Member> {
    return this.memberService.findById(id);
  }

  @Get('code/:code')
  async findByCode(@Param('code') code: string): Promise<Member> {
    return this.memberService.findByCode(code);
  }

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto): Promise<Member> {
    const member = new Member();
    member.code = createMemberDto.code;
    member.name = createMemberDto.name;
    return this.memberService.save(member);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMemberDto: CreateMemberDto,
  ): Promise<Member> {
    const member = await this.memberService.findById(id);
    member.code = updateMemberDto.code;
    member.name = updateMemberDto.name;
    return this.memberService.update(member);
  }
}
