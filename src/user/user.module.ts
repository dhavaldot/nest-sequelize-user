import { Module } from '@nestjs/common';
import { usersProviders } from './user.provider';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserService, UserResolver, ...usersProviders],
})
export class UserModule {}
