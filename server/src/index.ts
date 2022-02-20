import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app';
import logger from './config/logger';

let server: { close: (cb?: () => void) => void; };

mongoose.connect(process.env.MONGODB_URL).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(process.env.APP_PORT, () => {
    logger.info(`Listening to port ${process.env.APP_PORT}`);
  });
});

const exitHandler = (): void => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: never): void => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', (): void => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
