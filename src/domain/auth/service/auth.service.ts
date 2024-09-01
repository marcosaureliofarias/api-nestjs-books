import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ICriaUsuarioRepository } from '../../user/interfaces';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly getUserService: ICriaUsuarioRepository,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // Substitua pelo seu método de busca do usuário
    const user = await this.getUserService.findUserByUsername(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Método fictício para buscar o usuário
  async findUserByUsername(username: string): Promise<any> {
    // Simulação de usuário para exemplo. Substitua com sua lógica de busca.
    const user = await this.getUserService.findUserByUsername(username);
    return username === user.username ? user : null;
  }
}
