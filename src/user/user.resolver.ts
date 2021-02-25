import { UserService } from './user.service';
import { Query, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/Entities';

@Resolver('user')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
