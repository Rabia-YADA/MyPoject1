import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { BaseEntity } from "typeorm";
import { User } from "../entity/User";
import { UserCreateInput } from "../inputs/CreateUserInput";
import { UserUpdateInput } from "../inputs/UpdateUserInput";

@Resolver()
export class UserResolver extends BaseEntity {
  @Query(() => [User])
  users() {
    return User.find();
  }

  //find user by id
  @Query(() => User)
  user(@Arg("id") id: number) {
    return User.findOne({ where: { id } });
  }

  //Update user by id
  @Mutation(() => User)
  async updateUser(@Arg("id") id: number, @Arg("data") data: UserUpdateInput) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error("kullanıcı bulunamadı");
    }
    Object.assign(user, data);
    await user.save();
    return user;
  }

  //create user
  @Mutation(() => User)
  async createUser(@Arg("data") data: UserCreateInput) {
    const user = User.create(data);
    await user.save();
    return user;
  }

  //delete user by id
  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: number) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error("kullanıcı bulunamdı");
    }
    await user.remove();
    return true;
  }
}
