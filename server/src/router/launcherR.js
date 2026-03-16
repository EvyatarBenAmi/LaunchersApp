import { Router } from "express";
import { deletLauncherById, insertLauncher, returnAllLaunchrs, returnLauncherById } from "../cntrl/launcherC.js";

const router = Router()

router.get("/",returnAllLaunchrs)
router.get("/id",returnLauncherById)
router.post("/",insertLauncher)
router.delete("/:id",deletLauncherById)

export default router