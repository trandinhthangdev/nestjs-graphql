import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;
}
