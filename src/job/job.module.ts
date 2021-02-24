import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobProviders } from './job.provider';
import { JobService } from './job.service';

@Module({
  controllers: [JobController],
  providers: [JobService, ...JobProviders],
})
export class JobModule {}
