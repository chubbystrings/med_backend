import express from 'express'
const router = express.Router();
import { roles } from '../data/roles';

/* GET users listing. */
router.get('/', function(req, res, next) {
   return res.status(200).json({
     message: "successful" ,
     data: roles,
   });
});

export default router
