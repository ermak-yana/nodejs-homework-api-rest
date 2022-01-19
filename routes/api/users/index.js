import { Router } from "express";
import guard from "../../../middlewares/guard";
import { uploadAvatar } from "../../../controllers/users";
import { upload } from "../../../middlewares/upload";

const router = new Router();

router.patch("/avatar", guard, upload.single("avatar"), uploadAvatar);
export default router;
