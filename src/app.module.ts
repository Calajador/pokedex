import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { TrainersModule } from './trainers/trainers.module';
import { Trainer, TrainerSchema } from './trainers/entities/trainer.entity';
import { GymsModule } from './gyms/gyms.module';
import { ConsumiblesModule } from './consumibles/consumibles.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    CommonModule,
    PokemonModule,
    TrainersModule,
    GymsModule,
    ConsumiblesModule,
  ],
})
export class AppModule {}
