import { Injectable, Inject } from '@nestjs/common';
import { Job, User } from '../Entities';
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
    const data = await this.jobRepository.create<Job>(jobData);
    console.log('data', data);
    return data;
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

  async findWithUser() {
    let id = 1;
    let query = await this.jobRepository.sequelize.query(
      `select * from "Jobs" j inner join "Users" u on u.id = j."Uid" where u.id = ${id}`,
    );
    return query[0];
  }
}
