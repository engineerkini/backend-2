// src/entity/Song.ts (Song Entity)
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column()
  url: string;
}
