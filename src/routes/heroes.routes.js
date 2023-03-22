import { Router } from "express";
import {
  getHeroes,
  createHero,
  updateHero,
  getHero,
  deleteHero,
  bulkCreateHero,
} from "../controllers/hero.controller.js";

const router = Router();

// Routes
router.post("/", createHero);
router.post("/bulk",bulkCreateHero)
router.get("/", getHeroes);
router.put("/:id", updateHero);
router.delete("/:id", deleteHero);
router.get("/:id", getHero);



export default router;
