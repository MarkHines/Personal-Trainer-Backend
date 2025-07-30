import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createTrainer } from "#db/queries/trainers";
import { createProgram } from "#db/queries/programs";
import { faker } from "@faker-js/faker";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createUser("username", "password");
  
  //TRAINERS

  const gbst = await createTrainer(`Mr. Plate Banger`, 
    `http://localhost:3000/images/trainer_image.jpg`,
    `Over Train, Under Complain! Plates and MORE PLATES!!`,
    faker.lorem.sentences(3)
  );

  const qui = await createTrainer(`BIG Qui`,
    `http://localhost:3000/images/qui.jpg`,
    `Scientific Focus, but the science says TRAIN HARD!!`,
    faker.lorem.sentences(3)
  );
  
  const fitFilm = await createTrainer(`The FIT Film Maker`,
    `http://localhost:3000/images/fit_film.JPG`,
    `Sports & Fitness Instruction: Faith, Fitness, Family`,
    faker.lorem.sentences(3)
  );

  const theOx = await createTrainer(`BIG MACK`,
    `http://localhost:3000/images/the_ox.JPG`,
    `Powerlifter at heart, athlete by design — strength with purpose`,
    faker.lorem.sentences(3)
  );

  // PROGRAMS

  const plateBangers = await createProgram(gbst.id,
    `Plate Bangers`,
    `The Purpose of this program is to ${faker.lorem.sentences(3)}`,
    12
  );

  for(let i = 1; i <= 3; i++) {
    const program = await createProgram(gbst.id,
      `Program ${i}`,
      `The Purpose of this program is to ${faker.lorem.sentences(3)}`,
      Math.floor(Math.random() * 19)
    )
  }
  
  const hotGirl = await createProgram(qui.id,
    `Hot Girls Working`,
    `The Purpose of this program is to ${faker.lorem.sentences(3)}`,
    10
  );

  for(let i = 1; i <= 3; i++) {
    const program = await createProgram(qui.id,
      `Program ${i}`,
      `The Purpose of this program is to ${faker.lorem.sentences(3)}`,
      Math.floor(Math.random() * 19)
    )
  }
  
  const respectMuscle = await createProgram(fitFilm.id,
    `Respectable Muscle`,
    `The Purpose of this program is to ${faker.lorem.sentences(3)}`,
    8
  );

  for(let i = 1; i <= 3; i++) {
    const program = await createProgram(fitFilm.id,
      `Program ${i}`,
      `The Purpose of this program is to ${faker.lorem.sentences(3)}`,
      Math.floor(Math.random() * 19)
    )
  }

  const mackTruck = await createProgram(theOx.id,
    `The Mack Truck`,
    `The Purpose of this program is to ${faker.lorem.sentences(3)}`,
    8
  );

  for(let i = 1; i <= 3; i++) {
    const program = await createProgram(theOx.id,
      `Program ${i}`,
      `The Purpose of this program is to ${faker.lorem.sentences(3)}`,
      Math.floor(Math.random() * 19)
    )
  }
}
