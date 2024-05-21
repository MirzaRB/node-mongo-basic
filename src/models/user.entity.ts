import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/';

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    userName: { type: String, default: '' },
    email: { type: String, required: true },
    password: { type: String, select: false },
  },
  {
    timestamps: true,
  },
);

export default model<IUser>('User', userSchema);
