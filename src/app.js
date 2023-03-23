import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Import routes
import heroesRoutes from "./routes/heroes.routes.js";
import publisherRoutes from "./routes/publisher.routes.js";

// Middlewares
app.use(cors()) //descomentar para habilitar cross-cors
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/heroes", heroesRoutes);
app.use("/api/publishers", publisherRoutes);

export default app;