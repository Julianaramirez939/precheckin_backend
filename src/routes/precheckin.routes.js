import { Router } from "express";
import { createPrecheckin, deletePrecheckin, getPrecheckins, getPrecheckin, updatePrecheckin } from "../controllers/precheckin.controller.js";

const router = Router()

router.get('/precheckin', getPrecheckins);
router.post('/precheckin', createPrecheckin);
router.put('/precheckin/:id', updatePrecheckin);
router.delete('/precheckin/:id', deletePrecheckin);
router.get('/precheckin/:id_reserva', getPrecheckin);


export default router;