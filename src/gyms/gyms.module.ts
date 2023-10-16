import { Module } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { Gym, GymSchema } from './entities/gym.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [GymsController],
  providers: [GymsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Gym.name,
        schema: GymSchema,
      },
    ]),
  ],
})
export class GymsModule {}
