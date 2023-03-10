import { IsDate } from 'class-validator';
import { IsNumber } from 'class-validator/types/decorator/decorators';

export class GetMealPlanDto {
  @IsDate()
  date: Date;

  @IsNumber()
  max_list: number;
}
