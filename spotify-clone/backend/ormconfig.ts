import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your_username",
  password: "your_password",
  database: "spotify_clone",
  entities: ["dist/entity/**/*.js"],
  synchronize: true,
};

export default config;
