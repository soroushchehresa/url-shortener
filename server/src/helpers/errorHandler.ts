import { Response } from 'express';

export default (res: Response, error: {code: number, name: string, message?: string}) => {
  res.status(500).json({
    success: false,
    error: {
      message: error.message || (error.name === 'MongoServerError' ?  'There was a database error!' : 'An unknown error occurred!'),
    },
  });
};
