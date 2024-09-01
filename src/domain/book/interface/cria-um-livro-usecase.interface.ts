import { BookEntity } from '../entity/book.entity';
import { CreateBookDto } from '../dto/book.dto';

export abstract class ICriaBookUsecase {
  abstract process(criaUmLivroDto: CreateBookDto): Promise<BookEntity>;
}
