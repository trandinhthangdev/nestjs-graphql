import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => String)
export class AppResolver {
  @Query((returns) => String)
  index(): string {
    return 'NestJs Graphql Server';
  }

  @Query((returns) => String)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
  ): string {
    return 'login';
  }
}
