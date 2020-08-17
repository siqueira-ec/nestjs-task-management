import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { get } from 'config';

import { AppModule } from './app.module';
import { ServerConfig } from 'config/interfaces/server-config.interface';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  process.env.NODE_ENV === 'development' && app.enableCors();

  const serverConfig = get<ServerConfig>('server');
  const port = process.env.PORT || serverConfig.port;

  await app.listen(port);

  logger.log(
    `Server running on ${process.env.NODE_ENV ||
      'development'} mode and listening on port: ${port}`,
  );
}
bootstrap();
