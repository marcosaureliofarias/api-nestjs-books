import { Injectable } from '@nestjs/common';

import { CreateUserDto } from 'src/domain/user/dtos';
import { ICriaUsuarioRepository } from 'src/domain/user/interfaces';
import { DataSource, Repository } from 'typeorm';
import { CreateUserEntity } from '../entity';

@Injectable()
export class CriaUsuarioRepository implements ICriaUsuarioRepository {
  private repository: Repository<CreateUserEntity>;

  constructor(private readonly connection: DataSource) {
    this.repository = this.connection.getRepository(CreateUserEntity);
  }

  buscaUmRegistroPorNomeEmail(
    username: string,
    email: string,
  ): Promise<CreateUserEntity> {
    try {
      return this.repository.findOne({
        where: {
          username: username,
          email: email,
        },
      });
    } catch (error) {
      throw new error();
    }
  }

  findUserByUsername(username: string): Promise<CreateUserEntity> {
    try {
      return this.repository.findOne({
        where: {
          username: username,
        },
      });
    } catch (error) {
      throw new error();
    }
  }

  async criaUmRegistro(data: CreateUserDto): Promise<CreateUserEntity> {
    try {
      return await this.repository.save(data);
    } catch (error) {
      throw new error();
    }
  }
}
