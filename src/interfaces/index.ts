import { Router } from 'express';
import { Document } from 'mongoose';

export interface Routes {
  path?: string;
  router: Router;
}

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
}
