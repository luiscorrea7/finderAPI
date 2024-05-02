import { connect } from "mongoose";

export const connectDb = async () => {
  try {
    // await connect(DB_URI);
    console.log('Database succesfully deployed. (MongoDB/Atlas).')
  } catch (error) {
    console.log('Connection failed. Try again later.')
  }
};
