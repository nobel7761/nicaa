import { Injectable } from '@nestjs/common';
import { PrismaService } from './app/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  getData(): { message: string } {
    return { message: 'Hello Habibur Rahaman Nobel' };
  }
}
