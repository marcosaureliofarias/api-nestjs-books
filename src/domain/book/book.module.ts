import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookEntity } from './entity/book.entity';
import { CriaBookUsecase } from './usecase/book.usecase';
import { ICriaBookUsecase } from './interface/cria-um-livro-usecase.interface';
import { CriaUmLivroRepository } from './repository/book.repository';
import { ICriaUmLivroRepository } from './interface/book-repository.interface';
import { BookController } from './controller/book.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BookController],
  providers: [
    {
      provide: ICriaUmLivroRepository,
      useClass: CriaUmLivroRepository,
    },
    {
      provide: ICriaBookUsecase,
      useClass: CriaBookUsecase,
    },
  ],
  exports: [ICriaUmLivroRepository],
})
export class BookModule {}
