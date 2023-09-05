import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTaskArgs {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;
}
