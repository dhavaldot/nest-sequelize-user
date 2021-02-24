import { Injectable, Inject } from '@nestjs/common';
import { Job } from '../Entities';
import { JobModel } from '../Models';
import { Constant } from '../constants';

@Injectable()
export class JobService {
  constructor(
    @Inject(Constant.JOB_REPOSITORY)
    private readonly jobRepository: typeof Job,
  ) {}

  async findAll(): Promise<Job[]> {
    return this.jobRepository.findAll<Job>();
  }

  async create(jobData) {
    return this.jobRepository.create<Job>(jobData);
  }

  async checkJob(id) {
    return this.jobRepository.findOne<Job>({ where: { id } });
  }

  async updateJob(data) {
    return this.jobRepository.update(data, {
      where: { id: data.id },
    });
  }

  async deleteJob(id) {
    return this.jobRepository.destroy(id);
  }
}
