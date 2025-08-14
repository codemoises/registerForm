import { Router } from "express";
import { userController } from "./app/controller/UsersController";

const router: Router = Router();

router.get("/users", userController.list);
router.get("/users/search", userController.search);
router.get("/users/:id", userController.get);
router.post("/users", userController.create);

export { router };