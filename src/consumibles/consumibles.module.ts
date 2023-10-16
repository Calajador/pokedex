import { Module } from '@nestjs/common';
import { ConsumiblesService } from './consumibles.service';
import { ConsumiblesController } from './consumibles.controller';
import { Consumible, ConsumibleSchema } from './entities/consumible.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ConsumiblesController],
  providers: [ConsumiblesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Consumible.name,
        schema: ConsumibleSchema,
      },
    ]),
  ],
})
export class ConsumiblesModule {}
