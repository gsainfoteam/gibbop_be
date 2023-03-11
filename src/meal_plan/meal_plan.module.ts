import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealPlan } from 'src/global/entity/MealPlan.entity';
import { Menu } from 'src/global/entity/Menu.entity';
import { MealPlanController } from './meal_plan.controller';
import { MealPlanService } from './meal_plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([MealPlan, Menu])],
  controllers: [MealPlanController],
  providers: [MealPlanService],
})
export class MealPlanModule {}
