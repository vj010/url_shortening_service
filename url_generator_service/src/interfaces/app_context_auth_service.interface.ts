import { IUser } from './user_model.interface';

export interface AppContextAuthenticationService {
  getLoginUrl(options?: Record<string, any>): string | Promise<string>;
  registerUser(userInfo: IUser): IUser | Promise<IUser>;
}
