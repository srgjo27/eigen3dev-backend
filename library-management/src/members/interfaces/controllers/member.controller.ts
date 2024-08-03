import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MemberService } from '../../application/services/member.service';
import { Member } from '../../domain/entities/member.entity';
import { CreateMemberDto } from '../dtos/create-member.dto';

@Controller('members')
@ApiTags('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

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
    return this.memberService.create(member);
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
