import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { ReturnUserDto } from './dto/return-user.dto';
import { ReturnAllUserDto } from './dto/return-all-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createAdminUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.createAdminUser(createUserDto);
    return {
      user,
      message: 'Administrador cadastrado com sucesso',
    };
  }

  @Get()
  async getAllUsers(): Promise<ReturnAllUserDto> {
    const users = await this.usersService.getAllUsers();
    return {
      users,
      numberOfUsers: users.length,
    };
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<ReturnUserDto> {
    const user = await this.usersService.getUserById(id);
    return {
      user,
      message: 'Usuário encontrado',
    };
  }

  @Patch(':id')
  async updateUser(
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
    @Param('id') id: string,
  ) {
    return this.usersService.updateUser(updateUserDto, id);
  }
}
