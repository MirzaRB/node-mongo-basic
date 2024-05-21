import mongoose from 'mongoose';
import UserModel from '../models/user.entity';

export const connectDb = async () => {
  try {
    const connectionString =
      process.env.NODE_ENV === 'seed' ? `${process.env.MONGODB_URI_LOCAL}` : `${process.env.MONGODB_URI}`;
    await mongoose.connect(connectionString);
    console.log('CONNECTED TO DB SUCCESSFULLY!!!');
    if (process.env.NODE_ENV === 'seed') {
      console.log('CLEARING DATABASE FOR SEEDING =============>');
      await Promise.all([UserModel.deleteMany({})]);
      console.log('CLENANED DATABASE FOR SEEDING =============>');
    }

    console.log('\n');
  } catch (error) {
    console.log('DB CONNECTION FAILED');
    console.log(error);
    console.log('\n');
  }
};
