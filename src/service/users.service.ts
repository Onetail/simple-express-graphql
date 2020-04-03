import { User } from "../models/User";

export class UserService {
         async findAllUsers(): Promise<User[]> {
           const result = await User.findAll({
             attributes: ["id"]
           });
           return result;
         }

         async findUserByUserId(userId: number): Promise<User> {
             const result = await User.findOne({
               where: { id: userId }
           });
           return result;
         }
       }