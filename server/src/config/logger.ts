import {createLogger, format, transports} from 'winston';

const isProd = process.env.NODE_ENV === 'production';

const enumerateErrorFormat = format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger = createLogger({
  level: !isProd ? 'debug' : 'info',
    format: format.combine(
    enumerateErrorFormat(),
    !isProd ? format.colorize() : format.uncolorize(),
    format.splat(),
    format.printf(({ level, message }) => `${level}: ${message}`),
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console({
      stderrLevels: ['error'],
    }),
  ],
});

export default logger;
