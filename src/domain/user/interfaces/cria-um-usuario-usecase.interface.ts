import { CreateUserDto } from 'src/domain/user/dtos';
import { CreateUserEntity } from '../entity';

export abstract class ICriaUsuarioUsecase {
  abstract process(cidadeDto: CreateUserDto): Promise<CreateUserEntity>;
}

// export abstract class IEditaUmaCidadeUsecase {
//   abstract process(cidadeDto: EditaCidadeDto): Promise<CidadeEntity>;
// }
