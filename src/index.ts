import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { AppDataSource } from "./data-source";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const schema = await buildSchema({
      resolvers: [UserResolver],
    });
    const server = new ApolloServer({ schema });
    await server.listen(4000);
    console.log("Server is running on port 4000");
  })
  .catch((error) => console.log(error));
