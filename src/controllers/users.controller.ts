
import { User } from "../models/User";
import { UserService } from "../service/users.service";


export class UserController {
    constructor(private readonly userService: UserService) {}
    
    Users = async (): Promise<User[]> => {
          return await this.userService.findAllUsers();
    };
    
    User = async (obj: any, args: any, context: any, info: any): Promise<User> => {
          return await this.userService.findUserByUserId(args.userId);
    };
          
}
