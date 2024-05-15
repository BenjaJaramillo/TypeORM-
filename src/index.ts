// Importar "reflect-metadata" para permitir el uso de decoradores en TypeScript.
import "reflect-metadata";

// Importar la aplicación Express desde el archivo "./app".
import app from "./app";

// Importar la fuente de datos de la aplicación desde el archivo "./db".
import { AppDataSource } from "./db";

// Definir una función asincrónica llamada main para iniciar la aplicación.
async function main() {
  try {
    // Inicializar la fuente de datos de la aplicación para conectar con la base de datos.
    await AppDataSource.initialize();
    // Imprimir un mensaje en la consola para indicar que la conexión a la base de datos se ha establecido correctamente.
    console.log("Database connected");
    // Iniciar la aplicación Express y ponerla en funcionamiento en el puerto 3000.
    app.listen(3000);
    // Imprimir un mensaje en la consola para indicar que el servidor está escuchando en el puerto 3000.
    console.log("Server is listening on port ", 3000);
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso de inicialización.
    console.error(error);
  }
}

// Llamar a la función main para iniciar la aplicación.
main();
