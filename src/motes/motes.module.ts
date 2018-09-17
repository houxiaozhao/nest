import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MotesController } from './motes.controller';
import { MotesService } from './motes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoteSchema } from './schema/motes.schema';
function logger(req, res, next) {
  console.log(`请求`, new Date());
  next();
}
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Mote', schema: MoteSchema }])],
  controllers: [MotesController],
  providers: [MotesService],
})
export class MotesModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(logger).forRoutes(MotesController);
  }
}
