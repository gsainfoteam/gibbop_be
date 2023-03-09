import { Controller, Get } from '@nestjs/common';
import { MealPlanService } from './meal_plan.service';

@Controller('meal_plan')
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @Get('')
  async getMealPlan() {
    return;
  }
}
