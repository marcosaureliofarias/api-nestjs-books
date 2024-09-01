import { Injectable } from '@nestjs/common';

import { DataSource, Repository } from 'typeorm';
import { BookEntity } from '../entity/book.entity';
import { CreateBookDto } from '../dto/book.dto';
import { ICriaUmLivroRepository } from '../interface/book-repository.interface';

@Injectable()
export class CriaUmLivroRepository implements ICriaUmLivroRepository {
  private repository: Repository<BookEntity>;

  constructor(private readonly connection: DataSource) {
    this.repository = this.connection.getRepository(BookEntity);
  }

  buscaUmPorId(title: string): Promise<BookEntity> {
    try {
      return this.repository.findOne({
        where: {
          title: title,
        },
      });
    } catch (error) {
      throw new error();
    }
  }

  async criaUmLivroRegistro(data: CreateBookDto): Promise<BookEntity> {
    try {
      return await this.repository.save(data);
    } catch (error) {
      throw new error();
    }
  }
}
