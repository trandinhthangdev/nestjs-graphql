import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddTaskArgs {
  @Field()
  title: string;

  @Field()
  description: string;
}
