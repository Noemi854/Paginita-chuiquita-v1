import {Router} from 'express'
import { getTareas, getTareaByID, createTarea, deleteTarea, updateTarea} from '../controllers/tareas.controllers.js'

const router = Router();

router.get('/tareas', getTareas );

router.get('/tareas/:id', getTareaByID);

router.post('/tareas', createTarea);

router.delete('/tareas/:id', deleteTarea);

router.put('/tareas/:id', updateTarea);

export default router;