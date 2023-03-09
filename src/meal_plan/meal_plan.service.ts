import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MealPlan } from 'src/global/entity/MealPlan.entity';

@Injectable()
export class MealPlanService {
  constructor(
    @InjectRepository(MealPlan) private readonly mealPlanRepository,
  ) {}

  async getMealPlan() {
    return;
  }
}
