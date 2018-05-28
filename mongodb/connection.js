import mongoose from 'mongoose';
import { database } from '../config/config';

mongoose.connect(database);
const db = mongoose.connection;

export default db;
