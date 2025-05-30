import { Request, Response } from "express";
import mongoose from "../../config/db";

class HealthController {
  public async checkHealth(_req: Request, res: Response): Promise<void> {
    try {
      // Check MongoDB connection using ping
      if (mongoose.connection.readyState === 1 && mongoose.connection.db) {
        await mongoose.connection.db.admin().ping();
        res.status(200).json({
          status: "OK",
          database: "connected",
        });
      } else {
        res.status(500).json({
          status: "ERROR",
          database: "disconnected",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: "ERROR",
        database: "disconnected",
      });
    }
  }
}

const healthController = new HealthController();
export default healthController;
