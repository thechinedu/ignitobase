import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  const config = new DocumentBuilder()
    .setTitle('Ignito Gateway')
    .setDescription('The core Ignito service')
    .setVersion('1.0')
    .addTag('ignito-core')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.GATEWAY_SERVICE_PORT as string, '0.0.0.0');
}
bootstrap();
