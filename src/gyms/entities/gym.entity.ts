import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Trainer } from 'src/trainers/entities/trainer.entity';
import * as mongoose from 'mongoose';

@Schema()
export class Gym extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  ciudad: string;

  @Prop({
    unique: true,
    index: true,
  })
  tipo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' })
  lider: Trainer;
}

export const GymSchema = SchemaFactory.createForClass(Gym);

GymSchema.pre('findOne', function () {
  this.populate('lider');
});

GymSchema.pre('find', function () {
  this.populate('lider');
});
