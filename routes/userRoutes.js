import express from 'express';

import { getAllUser,createUser,deleteUser,getSalarySS,getSalarySSForContractors,getSalarySSForDepartment,getSalarySSByDepartmentAndSubDepartment } from '../controllers/userController.js';

const router=express.Router();

router.get("/",getAllUser);
router.post("/",createUser);
router.delete("/:id",deleteUser);
router.get("/getsalarySS",getSalarySS);
router.get("/getsalarySS/contractors",getSalarySSForContractors);
router.get("/getsalarySS/department", getSalarySSForDepartment);
router.get("/getsalarySS/department-and-subdepartment", getSalarySSByDepartmentAndSubDepartment);


export default router;