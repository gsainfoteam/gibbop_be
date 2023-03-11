import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetMealPlanDto {
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsString()
  restaurant: string;

  @IsOptional()
  @IsNumber()
  max_list?: number;
}

export class GetMenuDto {
  @IsString()
  restaurant: string;
}
