import db from "#db/client";

export const createProgram = async (trainerId, name, description, frequency) => {
  const sql = `
    INSERT INTO programs (trainer_id, name, description, frequency)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const { rows: [program] } = await db.query(sql, [trainerId, name, description, frequency]);
  return program
}

export const getAllPrograms = async () => {
  const sql = `
    SELECT * FROM programs
  `;
  const { rows: programs } = await db.query(sql);
  return programs
}

export const getProgramsByTrainerId = async (trainerId) => {
  const sql = `
    SELECT * FROM programs
    WHERE trainer_id = $1
  `;
  const { rows: programs } = await db.query(sql, [trainerId])
  return programs
}

export const getProgramById = async (id) => {
  const sql = `
    SELECT * FROM programs
    WHERE id = $1
  `;
  const { rows: [program] } = await db.query(sql, [id]);
  return program
}