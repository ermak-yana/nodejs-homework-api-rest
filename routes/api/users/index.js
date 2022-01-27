import { Router } from "express";
import guard from "../../../middlewares/guard";
import {
  uploadAvatar,
  verifyUser,
  repeatEmailForVerifyUser,
} from "../../../controllers/users";
import { upload } from "../../../middlewares/upload";

const router = new Router();

router.patch("/avatar", guard, upload.single("avatar"), uploadAvatar);
router.get("/verify/:token", verifyUser);
router.post("/verify", repeatEmailForVerifyUser);
export default router;
