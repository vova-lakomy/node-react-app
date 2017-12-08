import { UserInterface } from '../UserInterface';

export class User implements UserInterface {
    id?: string;
    email?: string;
    password?: string;
    role?: string;
    ownerId?: string;
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;

    constructor() {
    }
    
    static fromUser(user: UserInterface): User {
        const userInstance = new User();
        userInstance.id = user.id;
        userInstance.email = user.email;
        userInstance.password = user.password;
        userInstance.role = user.role;
        userInstance.ownerId = user.ownerId;
        userInstance.createdAt = user.createdAt;
        userInstance.deletedAt = user.deletedAt;
        userInstance.updatedAt = user.updatedAt;
        return userInstance;
    }

    static fromList(users: UserInterface[]): User[] {
        const list: User[] = [];
        users.forEach((user) => {
            list.push(this.fromUser(user));
        });
        return list;
    }
}
