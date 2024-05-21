import { faker } from '@faker-js/faker';
import UserModel from '../models/user.entity';
import { IUser } from '../interfaces';

export const userSeed = async (numOfUser: number): Promise<any> => {
  try {
    console.log('USER SEED START');
    const users: Partial<IUser>[] = [];
    for (let i = 0; i < numOfUser; i++) {
      const firstName = faker.person.firstName('male');
      const lastName = faker.person.lastName('male');
      const user: Partial<IUser> = {
        firstName,
        lastName,
        userName: `${firstName} ${lastName}`,
        email: `${firstName}${lastName}@gmail.com`,
        password: '$2b$10$enuMaXyofV2EHD/HSjqK5uNvciSt4rKnqg3mpIPrqj1SuXe3abREe',
      };
      users.push(user);
    }

    const insertedDocs: any[] = await UserModel.insertMany(users);
    console.log('USER SEED END');
    return insertedDocs.map((user: Partial<IUser>) => user._id);
  } catch (error) {
    console.log('ERROR IN USER SEED');
    console.log(error);
  }
};
