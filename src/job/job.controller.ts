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
import { Job } from 'src/Entities';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
  constructor(private readonly jobPostgresService: JobService) {}

  @Get('all')
  async getAll(): Promise<Job[]> {
    return await this.jobPostgresService.findAll();
  }

  @Post('add')
  async createUser(@Body() data: any, @Res() res) {
    try {
      const op = await this.jobPostgresService.create(data);
      if (!op.isNewRecord)
        return res.status(200).send({
          success: true,
          message: 'Job details added successfully',
        });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err,
      });
    }
  }

  @Post('update')
  async updateUser(@Body() data: any, @Res() res) {
    try {
      const { id } = data;

      if (!id) throw new Error('Please pass id');

      const checkJob = await this.jobPostgresService.checkJob(id);
      if (!checkJob) throw new Error('Job details not exist with this id');

      const update = await this.jobPostgresService.updateJob(data);
      if (update.length > 0)
        return res.status(200).send({
          success: true,
          message: 'Job details updated successfully',
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

      const checkJob = await this.jobPostgresService.checkJob(id);
      if (!checkJob) throw new Error('Job details not exist with this id');

      await this.jobPostgresService.deleteJob(id);
      return res.status(200).send({
        success: true,
        message: 'Job details deleted successfully',
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  }

  @Get('FindWithUser')
  async findWithUser(@Res() res) {
    try {
      const data = await this.jobPostgresService.findWithUser();
      if (data.length <= 0) throw new Error('Data not found');
      return res.status(200).send({
        success: true,
        data: data,
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: err.message,
      });
    }
  }
}
