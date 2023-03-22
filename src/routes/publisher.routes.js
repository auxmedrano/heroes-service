import { Router } from "express";
import {
  createPublisher,
  getPublishers,
  updatePublisher,
  deletePublisher,
  getPublisher,
  getPublisherHeroes,
} from "../controllers/publisher.controller.js";

const router = Router();

// Routes
router.post("/", createPublisher);
router.put("/:id", updatePublisher);
router.delete("/:id", deletePublisher);
router.get("/", getPublishers);
router.get("/:id", getPublisher);
router.get("/:id/heroes", getPublisherHeroes);

export default router;
