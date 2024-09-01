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

  async criaUmRegistro(data: CreateUserDto): Promise<CreateUserEntity> {
    try {
      return await this.repository.save(data);
    } catch (error) {
      throw new error();
    }
  }
}
