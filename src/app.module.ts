import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as CONSTANTS from './shared/constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* const DB_MYSQL_CONFIG: TypeOrmModuleOptions = {
  type: 'mysql',
  database: 'auto_valuator_instance',
  entities: [],
  synchronize: true,
  host: '127.0.0.1', // <-- changed from 'localhost'
  port: 3306,
  username: 'avapp',
  password: 'Test123$',
}; */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DB_SQLITE_CONFIG: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: CONSTANTS.SQLITE_DB_NAME,
  entities: [],
  synchronize: true,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
    TypeOrmModule.forRoot(DB_SQLITE_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
