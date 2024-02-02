import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MySQLConfig } from './config/mysql.configuration';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SQLiteConfig } from './config/sqlite.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      // useClass: MySQLConfig,
      useClass: SQLiteConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
