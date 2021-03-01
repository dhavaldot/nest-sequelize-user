import { UserService } from './user.service';
import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { User } from 'src/Entities';

@Resolver('user')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(args: User): Promise<User> {
    const data = await this.userService.create(args);
    console.log('data', data);
    return data;
  }
}
