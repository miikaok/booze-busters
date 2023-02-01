import dotenv from 'dotenv';
dotenv.config();

export function isTesting() {
  return process.env.NODE_ENV === 'test';
}

export function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}

function parseTemplate(originTemplate: string) {
  if (!originTemplate) return originTemplate;
  return originTemplate
    .replace(/{([^{}]+)}/g, (_, key) => process.env[key])
    .replace(/\$/g, '');
}

process.env.DATABASE_URL = parseTemplate(process.env.DATABASE_URL);

export default process.env;
