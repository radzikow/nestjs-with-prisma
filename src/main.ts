import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  loadGlobalPipes(app);
  loadSwagger(app);
  await app.listen(3000);
}
bootstrap();

const loadGlobalPipes = (app: INestApplication) => {
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
};

const loadSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
