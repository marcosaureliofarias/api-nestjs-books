import { BookEntity } from '../entity/book.entity';
import { CreateBookDto } from '../dto/book.dto';
export abstract class ICriaUmLivroRepository {
  abstract criaUmLivroRegistro: (createBookDto: CreateBookDto) => Promise<BookEntity>;
  abstract buscaUmPorId: (id: string) => Promise<BookEntity>;
}
