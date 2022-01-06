import express from "express";

import {
    getAllPerson
} from '../dao/user.js';

const router = new express.Router();

router.get('/users', getAllPerson);

export default router;