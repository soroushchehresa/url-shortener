import { Response } from 'express';

export default (res: Response, data: object) => {
  res.status(200).json({
    success: true,
    data,
  });
};
