import { InputType, Field } from "type-graphql";
import { BaseEntity } from "typeorm";

@InputType()
export class UserCreateInput extends BaseEntity {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  age: number;
}
