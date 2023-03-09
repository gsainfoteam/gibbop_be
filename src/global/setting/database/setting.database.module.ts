import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealPlan } from 'src/global/entity/MealPlan.entity';
import { Restaurant } from 'src/global/entity/Restaurant.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('MYSQL_DATABASE_HOST'),
        port: configService.get<number>('MYSQL_DATABASE_PORT'),
        username: configService.get<string>('MYSQL_DATABASE_USERNAME'),
        password: configService.get<string>('MYSQL_DATABASE_PASSWORD'),
        database: configService.get<string>('MYSQL_DATABASE_NAME'),
        entities: [Restaurant, MealPlan],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseSettingModule {}
