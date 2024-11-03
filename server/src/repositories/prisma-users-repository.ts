import { UsersRepository } from './users-repository';
import { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    const password_hash = await bcrypt.hash(password, 10);

    await this.prisma.user.create({
      data: {
        username,
        email,
        password_hash,
      },
    });
  }
}
