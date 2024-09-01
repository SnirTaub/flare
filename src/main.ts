import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    logger.log('Application is running on port 3000');
  } catch (error) {
    logger.error('Error starting the application', error.stack);
    process.exit(1);
  }
}
bootstrap();
