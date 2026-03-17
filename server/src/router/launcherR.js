import { Router } from "express";
import { deletLauncherById, insertLauncher, returnAllLaunchrs, returnLauncherById } from "../cntrl/launcherC.js";
import { verifyToken } from "../middleware/validates.js";

const router = Router()

router.get("/", verifyToken, returnAllLaunchrs)
router.get("/id", verifyToken, returnLauncherById)
router.post("/", verifyToken, insertLauncher)
router.delete("/:id", verifyToken, deletLauncherById)

export default router;