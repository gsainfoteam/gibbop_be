import { Controller, Get, Query } from '@nestjs/common';
import { MealPlan } from 'src/global/entity/MealPlan.entity';
import { GetMealPlanDto } from './meal_plan.dto';
import { MealPlanService } from './meal_plan.service';

@Controller('meal_plan')
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @Get('')
  async getMealPlan(
    @Query() { date, max_list }: GetMealPlanDto,
  ): Promise<MealPlan[]> {
    return this.mealPlanService.getMealPlan(date, max_list);
  }
}
