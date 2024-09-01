import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/domain/user/controllers';
import { ICriaUsuarioRepository, ICriaUsuarioUsecase } from 'src/domain/user/interfaces';
import { CriaUsuarioRepository } from 'src/domain/user/repositories';
import { CreateUserEntity } from './entity';
import { CriaUsuarioUsecase } from './usecases';

@Module({
  imports: [TypeOrmModule.forFeature([CreateUserEntity])],
  controllers: [UserController],
  providers: [
    {
      provide: ICriaUsuarioRepository,
      useClass: CriaUsuarioRepository,
    },
    {
      provide: ICriaUsuarioUsecase,
      useClass: CriaUsuarioUsecase,
    },
  ],
  exports: [ICriaUsuarioRepository],
})
export class UsersModule {}
