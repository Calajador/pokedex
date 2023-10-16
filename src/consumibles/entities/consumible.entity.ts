import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Consumible extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop()
  efecto: string;

  @Prop()
  compra: boolean;

  @Prop()
  precio: number;
}

export const ConsumibleSchema = SchemaFactory.createForClass(Consumible);
