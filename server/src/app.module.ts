import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DocsController } from './docs/docs.controller';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [UsersModule, PrismaModule],
  controllers: [AppController, DocsController],
  providers: [AppService],
})
export class AppModule {}
