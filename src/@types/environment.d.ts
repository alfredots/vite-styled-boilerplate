/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string
      USER_TYPE: string
      USER_TOKEN_EXPIRES_IN: string
      USER_TOKEN: string
      NODE_ENV: string
    }
  }
}

export {}
