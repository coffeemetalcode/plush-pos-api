import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { Customer } from 'src/customers/customer.entity';

export class SQLiteConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',
      database: process.env.SQLITE_DB_NAME,
      entities: [Customer],
      synchronize: true,
    };
  }
}
