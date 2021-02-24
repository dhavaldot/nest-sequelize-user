import { Injectable, Inject } from '@nestjs/common';
import { User } from '../Entities';
import { UserModel } from '../Models';
import { Constant } from '../constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(Constant.USER_REPOSITORY)
    private readonly userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }

  async create(user: UserModel): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async update(user: UserModel) {
    return await this.userRepository.update(user, {
      where: { id: user.id },
    });
  }

  async delete(id): Promise<any> {
    return await this.userRepository.destroy({ where: { id: id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
