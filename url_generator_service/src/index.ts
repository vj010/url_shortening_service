import dotenv from 'dotenv';
dotenv.config();

import { AppContext } from './utils/app';
import mongoose from 'mongoose';

const appContext: AppContext = new AppContext();

mongoose.connect(process.env.MONGO_CONNECTION_URL, (error) => {
  if (error) {
    console.log('mongo connection failed', error);
    appContext.stopServer();
  } else {
    console.log('mongo connected');
  }
});

appContext.startServer(parseInt(process.env.PORT));

console.log(process.env.PORT);
