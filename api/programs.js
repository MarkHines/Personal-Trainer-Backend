import express from 'express';
const programsRouter = express.Router();
export default programsRouter;

import { getAllPrograms, getProgramById } from '#db/queries/programs';


programsRouter.get(`/`, async (request, response) => {
  const programs = await getAllPrograms();
  response.send(programs);
});

programsRouter.get(`/:id`, async (request, response) => {
  const { id } = request.params;
  const program = await getProgramById(id);
  response.send(program)
});