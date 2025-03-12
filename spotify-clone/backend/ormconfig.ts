// ormconfig.ts (Database Configuration)
import { DataSource } from "typeorm";
import { User } from "./src/entity/User";
import { Song } from "./src/entity/Song";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "spotify_clone",
  synchronize: true,
  logging: false,
  entities: [User, Song],
});
