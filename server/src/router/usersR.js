import { Router } from "express";
import { addNewUser, deleteUser, getAllUsers, getLoginUser, loginUser, updateUser } from "../cntrl/usersC.js";
import { verifyToken } from "../middleware/validates.js";

const router = Router()

router.post("/register/login", loginUser)
router.post("/register/create", verifyToken, addNewUser)
router.put("/register/update", verifyToken, updateUser)
router.delete("/register/delet/:id", verifyToken, deleteUser)
router.get("/register/getUser", verifyToken, getLoginUser)
router.get("/register/users", verifyToken, getAllUsers)

export default router;