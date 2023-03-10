import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MealPlan } from 'src/global/entity/MealPlan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MealPlanService {
  constructor(
    @InjectRepository(MealPlan)
    private readonly mealPlanRepository: Repository<MealPlan>,
  ) {}

  async getMealPlan(date: Date, max_list = 10): Promise<MealPlan[]> {
    return this.mealPlanRepository
      .createQueryBuilder('meal_plan')
      .where('meal_plan.meal_date > :date', { date })
      .limit(max_list)
      .orderBy({ 'meal_plan.meal_date': 'DESC' })
      .getMany();
  }
}
