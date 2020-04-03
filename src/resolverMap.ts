// resolverMap.ts
import { IResolvers } from "graphql-tools";
import { UserController } from "./controllers/users.controller";
import { UserService } from "./service/users.service";

const User = new UserController(new UserService());

const resolverMap: IResolvers = {
  Query: {
    Users: User.Users,
    User: User.User
  }
};
export default resolverMap;
