import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { get } from 'config';

import { DbConfig } from 'config/interfaces/db-config.interface';

const dbConfig = get<DbConfig>('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.HOSTNAME || dbConfig.host,
  port: Number(process.env.DB_PORT) || dbConfig.port,
  username: process.env.DB_USER || dbConfig.username,
  password: process.env.DB_PWD || dbConfig.password,
  database: process.env.DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: Boolean(process.env.DB_SYNC) || dbConfig.synchronize,
};
