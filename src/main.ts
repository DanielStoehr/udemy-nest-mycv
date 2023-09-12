import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// import cookieSession from 'cookie-session';
import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(cookieSession({ keys: ['abcdef'] }));
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(3000);
}
bootstrap();
