import { Controller, Get, Query } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { MealPlan } from 'src/global/entity/MealPlan.entity';
import { Menu } from 'src/global/entity/Menu.entity';
import { GetMealPlanDto, GetMenuDto } from './meal_plan.dto';
import { MealPlanService } from './meal_plan.service';

@Controller('meal_plan')
@UsePipes(ValidationPipe)
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  //급식 표는 로그인 여부와 상관없이 접근 가능
  @Get('cafeteria')
  async getMealPlan(
    @Query() { date, restaurant, max_list }: GetMealPlanDto,
  ): Promise<MealPlan[]> {
    return this.mealPlanService.getMealPlan(date, restaurant, max_list);
  }

  @Get('restaurant')
  async getMenu(@Query() { restaurant }: GetMenuDto): Promise<Menu[]> {
    return this.mealPlanService.getMenu(restaurant);
  }
}
