import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mote } from './interface/motes.interface';
import { CreateMoteDto } from './dto/create-mote.dto';
@Injectable()
export class MotesService {
  constructor(@InjectModel('Mote') private readonly moteModel: Model<Mote>) {}
  async create(mote: CreateMoteDto): Promise<Mote> {
    const createMote = new this.moteModel(mote);
    createMote.LORA = {
      SF: '123',
      CRC: '123',
      BW: '123',
      PWR: '123',
      RSSI: '1231',
      SNR: '23',
    };
    createMote.alarmRules = [
      {
        name: 'pm10上限',
        num: 150,
        rule: '大于',
        time: 21,
      },
      {
        name: 'pm10下限',
        num: 40,
        rule: '大于',
        time: 21,
      },
    ];
    createMote.createTime = new Date();
    createMote.collectTime = null;
    return await createMote.save();
  }
  async delete(_id: string) {
    return await this.moteModel.remove({ _id: _id });
  }
  async getall(): Promise<Mote[]> {
    return await this.moteModel.find().exec();
  }
  async editMote(_id: string, mote: CreateMoteDto) {
    return await this.moteModel.updateOne({ _id: _id }, mote);
  }
}
