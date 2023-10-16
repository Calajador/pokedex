import { IsString, IsNotEmpty, MinLength, IsMongoId } from 'class-validator';

export class CreateGymDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  ciudad: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  tipo: string;

  @IsMongoId()
  @IsNotEmpty()
  lider: string;
}
