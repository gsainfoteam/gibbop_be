import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Restaurant } from './Restaurant.entity';

@Entity('meal_plan')
export class MealPlan extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  meal_date: Date;

  @Column()
  meal: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.id)
  restaurant: Restaurant;
}
