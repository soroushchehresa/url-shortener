import * as Joi from 'joi';
import {Response, Request, NextFunction} from 'express';
import * as shortid from 'shortid';

export const urlValidator = (text: string, helpers?: Joi.CustomHelpers<any>): any => {
  let url: URL;
  try {
    url = new URL(text);
  } catch (_) {
    if (helpers) {
      throw new Error ('Invalid URL');
    }
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

export const shortIdValidator = (id: string): boolean | void => {
  if(!shortid.isValid(id)) {
    throw new Error ('Invalid URL ID');
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
 const {body: data} = req;
  const schema = Joi.object().keys({
    url: Joi.string().required().custom(urlValidator),
  });
  try {
    await schema.validateAsync(data);
    next();
  } catch (err) {
    if(err.isJoi) {
      res.status(422).json({ error: {message: err.message} })
    }
    res.end();
  }
};

export const read = async (req: Request, res: Response, next: NextFunction) => {
  const {params: data} = req;
  const schema = Joi.object().keys({
    id: Joi.string().required().custom(shortIdValidator),
  });
  try {
    await schema.validateAsync(data);
    next();
  } catch (err) {
    if(err.isJoi) {
      res.status(422).json({message: err.message});
    }
    res.end();
  }
};
