import db from "#db/client";

export const createTrainer = async (name, imgUrl, description, bio) => {
  const sql = `
    INSERT INTO trainers (name, img_url, description, bio)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const { rows: [trainer] } = await db.query(sql, [name, imgUrl, description, bio]);
  return trainer
}

export const getAllTrainers = async () => {
  const sql = `
    SELECT * FROM trainers;
  `;
  const { rows: trainers } = await db.query(sql);
  return trainers
}

export const getTrainerById = async (id) => {
  const sql = `
    SELECT * FROM trainers
    WHERE id = $1
  `;
  const { rows: [trainer] } = await db.query(sql, [id] );
  return trainer;
}