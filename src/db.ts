// Importar la clase DataSource de TypeORM para establecer la conexión con la base de datos.
import { DataSource } from "typeorm";

// Importar la entidad User desde el archivo "./entities/user".
import { User } from "./entities/user";

// Crear una nueva instancia de DataSource para la aplicación.
export const AppDataSource = new DataSource({
  // Configuración de la conexión a la base de datos PostgreSQL.
  type: "postgres", // Tipo de base de datos (PostgreSQL en este caso).
  host: "localhost", // Host de la base de datos.
  port: 5432, // Puerto de la base de datos.
  username: "postgres", // Nombre de usuario para acceder a la base de datos.
  password: "123", // Contraseña del usuario para acceder a la base de datos.
  database: "typeorm", // Nombre de la base de datos a la que se conectará.
  synchronize: true, // Sincronizar las definiciones de las entidades con la base de datos (solo para desarrollo).
  logging: true, // Activar el registro de consultas SQL en la consola (solo para desarrollo).
  entities: [User], // Lista de entidades que serán gestionadas por TypeORM.
});
