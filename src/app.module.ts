import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './domain/user';
import { DatabaseModule } from './domain/database/database.module';
import { AuthModule } from './domain/auth/auth.module';
import { BookModule } from './domain/book/book.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
