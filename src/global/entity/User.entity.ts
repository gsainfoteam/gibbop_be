import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Restaurant } from './Restaurant.entity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryColumn('uuid')
  idp_uuid: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.id)
  favorite_restaurant: Restaurant;
}
