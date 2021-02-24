import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { JobModule } from './job/job.module';
import { JobProviders } from './job/job.provider';

@Module({
  imports: [DatabaseModule, UserModule, JobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
