import express from "express";
import {
  getGameInfo,
  myInfo,
  updateGameInfo,
  dayHistory,
  monthHistory,
  yearHistory,
  CsetGameNumber,
  CgetGameNumber,
  CupdateGameNumber,
  CdeleteGameNumber,
  CaddBotUser,
  CupdateBotUser,
  CdeleteBotUser,
  CgetBotUsers,
} from "./controllers/client";
import { totalHistory, totalUsers } from "./controllers/admin";
import fileUpload from "./middlewares/fileUpload";

const router = express.Router();

router.get("/get-total-history", totalHistory);
router.get("/get-day-history", dayHistory);
router.get("/get-month-history", monthHistory);
router.get("/get-year-history", yearHistory);
router.get("/get-total-users", totalUsers);
router.get("/get-game-info", getGameInfo);

router.post("/my-info", myInfo);
router.post("/update-game-info", updateGameInfo);

router.post("/set-game-number", CsetGameNumber);
router.post("/update-game-number", CupdateGameNumber);
router.post("/delete-game-number", CdeleteGameNumber);
router.post("/get-game-number", CgetGameNumber);

router.post("/add-bot-user", CaddBotUser);
router.put("/update-bot-user/:id", fileUpload, CupdateBotUser);
router.delete("/delete-bot-user/:id", CdeleteBotUser);
router.get("/get-bot-user", CgetBotUsers);

export default router;
