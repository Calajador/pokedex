import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsNumber()
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @Min(1)
  no: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}
