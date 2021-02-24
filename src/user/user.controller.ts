/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Res,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../Entities';

@Controller('user')
export class UserController {
  constructor(private readonly userPostgresService: UserService) {}

  @Get('all')
  async getAll(): Promise<User[]> {
    return await this.userPostgresService.findAll();
  }

  @Post('add')
  async createUser(@Body() data: any, @Res() res) {
    try {
      const op = await this.userPostgresService.create(data);
      if (!op.isNewRecord)
        return res.status(200).send({
          success: true,
          message: 'User added successfully',
        });
    } catch (err) {
      res.status(400).send({
        success: true,
        message: err.message,
      });
    }
  }

  @Post('update')
  async updateUser(@Body() data: any, @Res() res) {
    try {
      const { id } = data;

      if (!id) throw new Error('Please pass id');

      const checkUser = await this.userPostgresService.findOneById(id);
      if (!checkUser) throw new Error('User not exist with this id');

      const update = await this.userPostgresService.update(data);
      if (update.length > 0)
        return res.status(200).send({
          success: true,
          message: 'User added successfully',
        });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: any, @Res() res) {
    try {
      if (!id) throw new Error('Please pass id');

      const checkUser = await this.userPostgresService.findOneById(id);
      if (!checkUser) throw new Error('User not exist with this id');

      await this.userPostgresService.delete(id);
      return res.status(200).send({
        success: true,
        message: 'User deleted successfully',
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  }
}
