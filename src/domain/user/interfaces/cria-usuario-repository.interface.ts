import { CreateUserDto } from 'src/domain/user/dtos';
import { CreateUserEntity } from '../entity';
export abstract class ICriaUsuarioRepository {
  abstract criaUmRegistro: (
    criaCidadeDto: CreateUserDto,
  ) => Promise<CreateUserEntity>;
  abstract buscaUmRegistroPorNomeEmail: (
    username: string,
    email: string,
  ) => Promise<CreateUserEntity>;
}
