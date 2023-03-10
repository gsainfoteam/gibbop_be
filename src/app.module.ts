import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MealPlanModule } from './meal_plan/meal_plan.module';
import { DatabaseSettingModule } from './global/setting/database/setting.database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production' ? 'prod.env' : 'dev.env',
    }),
    MealPlanModule,
    DatabaseSettingModule,
    UserModule,
  ],
})
export class AppModule {}
