import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Restaurant } from './Restaurant.entity';

@Entity()
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  menu: string;

  @Column()
  price: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.id)
  restaurant: Restaurant;
}
