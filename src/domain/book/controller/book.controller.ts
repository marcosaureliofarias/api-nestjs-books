import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { ICriaBookUsecase } from '../interface/cria-um-livro-usecase.interface';
import { CreateBookDto } from '../dto/book.dto';
import { BookEntity } from '../entity/book.entity';

@UseGuards(JwtAuthGuard)
@Controller('book')
export class BookController {
  constructor(private readonly criaUmLivroUsecase: ICriaBookUsecase) {}
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  criaUmRegistro(@Body() criaUmLivroDto: CreateBookDto): Promise<BookEntity> {
    return this.criaUmLivroUsecase.process(criaUmLivroDto);
  }
}
