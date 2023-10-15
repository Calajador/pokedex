import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Pokemon } from '../../pokemon/entities/pokemon.entity';
import * as mongoose from 'mongoose';

@Schema()
export class Trainer extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop()
  age: number;

  @Prop()
  sex: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon' }] })
  pokemons: Pokemon[];
}

export const TrainerSchema = SchemaFactory.createForClass(Trainer);

TrainerSchema.pre('findOne', function () {
  this.populate('pokemons');
});
