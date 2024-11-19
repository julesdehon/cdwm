import "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
      NEXT_PUBLIC_CHECKBOX_RECAPTCHA_SITE_KEY: string;
    }
  }
}