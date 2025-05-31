import { Router } from "express";
import { createUserController, deleteUsercontrolerr, getAllUsersController, updatedUsercontroller } from "../controllers/usuarios.controllers";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { createUserSchema, updatedUserSchema } from "../schemas/usuarios.schemas";

export const usuariosRoutes:Router = Router()

usuariosRoutes.post("",validateDataMiddleware(createUserSchema), createUserController)
usuariosRoutes.get("",getAllUsersController)
usuariosRoutes.patch("/:id", validateDataMiddleware(updatedUserSchema),updatedUsercontroller)
usuariosRoutes.delete("/:id",deleteUsercontrolerr)