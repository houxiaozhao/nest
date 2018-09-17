import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Query,
  Param,
  Put,
} from '@nestjs/common';
import { MotesService } from './motes.service';
import { CreateMoteDto } from './dto/create-mote.dto';
import { Mote } from './interface/motes.interface';
@Controller('motes')
export class MotesController {
  constructor(private motesService: MotesService) {}
  @Post()
  async create(@Body() createMoteDto: CreateMoteDto) {
    return this.motesService.create(createMoteDto);
  }
  @Get()
  async getall(): Promise<Mote[]> {
    return this.motesService.getall();
  }
  @Get(':moteid')
  async getone(@Param() param): Promise<Mote> {
    return this.motesService.getone(param.moteid);
  }
  @Delete('/deleteMote')
  //自定义路径 http://127.0.0.1:3000/motes/deleteMote?moteid=5b9f142df38a9a4924f281d8
  async deleteMote(@Query() query) {
    // 实用url查询参数
    return this.motesService.delete(query.moteid);
  }

  @Delete(':moteid')
  // restful风格接口 http://127.0.0.1:3000/motes/5b9f142df38a9a4924f281d8
  async deleteMote2(@Param() param) {
    return this.motesService.delete(param.moteid);
  }
  @Put(':moteid')
  async editMote(@Param() param, @Body() createMoteDto: CreateMoteDto) {
    return this.motesService.editMote(param.moteid, createMoteDto);
  }
}
