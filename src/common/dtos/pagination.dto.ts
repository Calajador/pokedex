import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDTO {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  limite?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  offset?: number;
}
