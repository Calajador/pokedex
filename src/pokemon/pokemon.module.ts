import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { Trainer, TrainerSchema } from 'src/trainers/entities/trainer.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      },
      {
        name: Trainer.name,
        schema: TrainerSchema,
      },
    ]),
  ],
})
export class PokemonModule {}
