import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateTrainerDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsNumber()
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @Min(1)
  age: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  sex: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsMongoId({ each: true })
  pokemons: string[];
}
