import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateConsumibleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  efecto: string;

  @IsBoolean()
  compra: boolean;

  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  precio: number;
}
