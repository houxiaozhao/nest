import { Module } from '@nestjs/common';
import { MotesController } from './motes.controller';
import { MotesService } from './motes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoteSchema } from './schema/motes.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Mote', schema: MoteSchema }])],
  controllers: [MotesController],
  providers: [MotesService],
})
export class MotesModule {}
