import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { JwtStrategy } from './jwt-strategy/jwt.strategy';
import { CriaUsuarioRepository } from '../user/repositories';
import { ICriaUsuarioRepository } from '../user/interfaces';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'sd31f3sd51fs3d54f3sd54s5d43sd',
      signOptions: { expiresIn: '180s' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    {
      provide: ICriaUsuarioRepository,
      useClass: CriaUsuarioRepository,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
