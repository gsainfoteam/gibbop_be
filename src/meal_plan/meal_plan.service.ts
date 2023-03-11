import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MealPlan } from 'src/global/entity/MealPlan.entity';
import { Menu } from 'src/global/entity/Menu.entity';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class MealPlanService {
  constructor(
    @InjectRepository(MealPlan)
    private readonly mealPlanRepository: Repository<MealPlan>,
    @InjectRepository(Menu)
    private readonly menuRepositoty: Repository<Menu>,
  ) {}

  async getMealPlan(
    date: Date,
    Restaurant: string,
    max_list = 10,
  ): Promise<MealPlan[]> {
    return this.mealPlanRepository.find({
      where: {
        meal_date: MoreThan(date),
        restaurant: { name: Restaurant },
      },
      order: {
        meal_date: 'ASC',
      },
      take: max_list,
    });
  }

  async getMenu(Restaurant: string): Promise<Menu[]> {
    return this.menuRepositoty.find({
      where: { restaurant: { name: Restaurant } },
    });
  }
}
