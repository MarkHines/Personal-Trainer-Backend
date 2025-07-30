import express from 'express';
const trainersRouter = express.Router();
export default trainersRouter;

import { getAllTrainers, getTrainerById } from '#db/queries/trainers';
import { getProgramsByTrainerId } from '#db/queries/programs';


trainersRouter.get(`/`, async (request, response) => {
  const trainers = await getAllTrainers();
  response.send(trainers);
});

trainersRouter.get(`/:id`, async (request, response) => {
  const { id } = request.params;
  const trainer = await getTrainerById(id);
  response.send(trainer);
});

trainersRouter.get(`/:id/programs`, async (request, response) => {
  const { id } = request.params;
  const programs = await getProgramsByTrainerId(id);
  response.send(programs);
})