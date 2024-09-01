import { ConflictException, Injectable } from '@nestjs/common';
import { BookEntity } from '../entity/book.entity';
import { ICriaBookUsecase } from '../interface/cria-um-livro-usecase.interface';
import { CreateBookDto } from '../dto/book.dto';
import { ICriaUmLivroRepository } from '../interface/book-repository.interface';

@Injectable()
export class CriaBookUsecase implements ICriaBookUsecase {
  constructor(private readonly repository: ICriaUmLivroRepository) {}

  public async process(criaUmLivroDto: CreateBookDto): Promise<BookEntity> {
    const verifyBook = await this.repository.buscaUmPorId(criaUmLivroDto.title);

    if (verifyBook) {
      throw new ConflictException('já existe um livro cadastrado');
    }

    const newUser = await this.repository.criaUmLivroRegistro(criaUmLivroDto);

    return newUser;
  }
}
