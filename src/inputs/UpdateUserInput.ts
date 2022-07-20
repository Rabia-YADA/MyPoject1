import { InputType, Field } from "type-graphql";
import { BaseEntity } from "typeorm";

@InputType()
export class UserUpdateInput extends BaseEntity {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  age?: number;
}
