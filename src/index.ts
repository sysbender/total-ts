import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [new transports.Console()],
});

logger.info('Hello via Bun!');

const hello: string = 'hello';
logger.info({ hello });
