import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/domain/user/dtos';
import {
  ICriaUsuarioUsecase,
} from 'src/domain/user/interfaces';
import { CreateUserEntity } from '../entity';

@Controller('users')
export class UserController {
  constructor(private readonly criaUmaCidadeUsecase: ICriaUsuarioUsecase) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  criaUmRegistro(@Body() criaCidadeDto: CreateUserDto): Promise<CreateUserEntity> {
    return this.criaUmaCidadeUsecase.process(criaCidadeDto);
  }
}
