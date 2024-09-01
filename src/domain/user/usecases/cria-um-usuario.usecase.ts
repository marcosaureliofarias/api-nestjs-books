import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/domain/user/dtos';
import {
  ICriaUsuarioRepository,
  ICriaUsuarioUsecase,
} from 'src/domain/user/interfaces';
import { CreateUserEntity } from '../entity';

@Injectable()
export class CriaUsuarioUsecase implements ICriaUsuarioUsecase {
  constructor(private readonly repository: ICriaUsuarioRepository) {}

  public async process(cidadeDataDto: CreateUserDto): Promise<CreateUserEntity> {
    const novaCidade = await this.repository.criaUmRegistro(cidadeDataDto);

    return novaCidade;
  }
}
