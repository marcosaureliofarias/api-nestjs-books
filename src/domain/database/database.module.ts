import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { CreateUserEntity } from '../user/entity';
import { BookEntity } from '../book/entity/book.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'dpg-cragbsbtq21c73c00ed0-a.oregon-postgres.render.com',
  port: 5432,
  username: 'marcos_41on_user',
  password: '5v5hJXSoGYOlxUDbmeGi3U514FC5geg4',
  database: 'marcos_41on',
  entities: [CreateUserEntity, BookEntity],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          ...dataSourceOptions,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
