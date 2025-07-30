DROP TABLE IF EXISTS programs;
DROP TABLE IF EXISTS trainers;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password text NOT NULL
);

CREATE TABLE trainers (
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  img_url text NOT NULL, 
  description text NOT NULL,
  bio text NOT NULL
);

CREATE TABLE programs (
  id serial PRIMARY KEY,
  trainer_id INTEGER NOT NULL REFERENCES trainers(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text NOT NULL,
  frequency INTEGER NOT NULL,
  UNIQUE(trainer_id, name, description)
);