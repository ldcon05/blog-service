import { start } from './server';
import db from './mongodb/connection';

db
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', () => {
    start();
  });
