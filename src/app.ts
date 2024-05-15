// Importar el módulo 'express' para crear una instancia de la aplicación.
import express from "express";
// Importar el módulo 'morgan' para el registro de solicitudes HTTP.
import morgan from "morgan";
// Importar el módulo 'cors' para habilitar el intercambio de recursos entre diferentes orígenes.
import cors from "cors";
// Importar las rutas de usuario desde el archivo "./routes/user.routes".
import userRoutes from "./routes/user.routes";
// Crear una instancia de la aplicación Express.
const app = express();
// Utilizar el middleware 'morgan' con el formato "dev" para el registro de solicitudes HTTP en la consola.
app.use(morgan("dev"));
// Utilizar el middleware 'cors' para habilitar el intercambio de recursos entre diferentes orígenes.
app.use(cors());
// Utilizar el middleware incorporado 'express.json()' para analizar el cuerpo de las solicitudes JSON.
app.use(express.json());
// Montar las rutas de usuario en la aplicación.
app.use(userRoutes);
// Exportar la aplicación Express configurada para que pueda ser utilizada en otros archivos.
export default app;
