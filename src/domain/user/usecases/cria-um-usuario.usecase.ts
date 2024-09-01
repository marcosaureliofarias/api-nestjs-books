import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/domain/user/dtos';
import {
  ICriaUsuarioRepository,
  ICriaUsuarioUsecase,
} from 'src/domain/user/interfaces';
import { CreateUserEntity } from '../entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CriaUsuarioUsecase implements ICriaUsuarioUsecase {
  constructor(private readonly repository: ICriaUsuarioRepository) {}

  public async process(
    cidadeDataDto: CreateUserDto,
  ): Promise<CreateUserEntity> {
    const verifyUser = await this.repository.buscaUmRegistroPorNomeEmail(
      cidadeDataDto.username,
      cidadeDataDto.email,
    );

    if (verifyUser) {
      throw new ConflictException('Usuário já existe com esse nome ou email.');
    }

    cidadeDataDto.password = await bcrypt.hash(cidadeDataDto.password, 10);

    const newUser = await this.repository.criaUmRegistro(cidadeDataDto);

    return newUser;
  }
}
