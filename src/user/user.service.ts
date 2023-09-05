import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

export class UserService {
  constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
  ) {}

  async findUserByEmail(email: string) {
    const user: User = await this.userRepo.findOne({ where: { email: email } });
    return user;
  }
}
