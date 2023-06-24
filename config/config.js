module.exports.config = {
  DATABASE: {
    HOST: process.env.DATABASE_HOST || "localhost",
    PORT: process.env.DATABASE_PORT || 3306,
    NAME: process.env.DATABASE_NAME || "name",
    USERNAME: process.env.DATABASE_USERNAME || "root",
    PASSWORD: process.env.DATABASE_PASSWORD || "",
  },
  PASSPORT: {
    SECRET_KEY: process.env.PASSPORT_SECRET_KEY || "aaa",
  },
  MAIL: {
    NO_REPLY: process.env.EMAIL_NO_REPLY || "bishwodahal123@gmail.com",
  },
};
