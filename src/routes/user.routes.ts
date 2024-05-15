// Importar el objeto Router de Express.
import { Router } from "express";

// Importar los controladores de usuario desde el archivo "../controllers/user.controllers".
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/user.controllers";

// Crear una nueva instancia de Router.
const router = Router();

// Definir las rutas y vincularlas a los controladores correspondientes.

// Ruta para crear un nuevo usuario (POST /users).
router.post("/users", createUser);

// Ruta para obtener todos los usuarios (GET /users).
router.get("/users", getUsers);

// Ruta para actualizar un usuario existente (PUT /users/:id).
router.put("/users/:id", updateUser);

// Ruta para eliminar un usuario existente (DELETE /users/:id).
router.delete("/users/:id", deleteUser);

// Ruta para obtener un usuario específico por su ID (GET /users/:id).
router.get("/users/:id", getUser);

// Exportar el enrutador para que pueda ser utilizado en otras partes de la aplicación.
export default router;
