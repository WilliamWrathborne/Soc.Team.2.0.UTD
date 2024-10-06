import env from './local.env.json';

// Add a type declaration for the JSON module
declare module "*.json" {
  const value: any;
  export default value;
}

export const OPENAI_API_KEY = (env as any).openapi_key;
export const OPENAI_DEFAULT_MODEL: string = (env as any).default_model;
export const OPENAI_DEFAULT_SYSTEM_PROMPT: string = (env as any).default_system_prompt;
