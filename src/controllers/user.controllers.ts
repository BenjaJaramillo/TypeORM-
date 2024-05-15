// Importar los objetos Request y Response de Express.js y la entidad User desde un archivo ../entities/user.
import { Request, Response } from "express";
import { User } from "../entities/user";

// Controlador para crear un usuario.
export const createUser = async (req: Request, res: Response) => {
  try {
    // Extraer el firstname y el lastname del cuerpo de la solicitud.
    const { firstname, lastname } = req.body;
    // Crear una nueva instancia de User.
    const user = new User();
    // Establecer el firstname y el lastname del usuario.
    user.firstname = firstname;
    user.lastname = lastname;
    // Registrar el usuario en la consola.
    console.log(user);

    // Guardar el usuario en la base de datos.
    await user.save();

    // Enviar una respuesta JSON con el usuario creado.
    return res.json(user);
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso.
    if (error instanceof Error) {
      // Enviar una respuesta de error con el mensaje de error.
      return res.status(500).json({ message: error.message });
    }
  }
};

// Controlador para obtener todos los usuarios.
export const getUsers = async (req: Request, res: Response) => {
  try {
    // Obtener todos los usuarios de la base de datos.
    const users = await User.find();
    // Enviar una respuesta JSON con todos los usuarios.
    return res.json(users);
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso.
    if (error instanceof Error) {
      // Enviar una respuesta de error con el mensaje de error.
      return res.status(500).json({ message: error.message });
    }
  }
};

// Controlador para actualizar un usuario.
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params; // Obtener el ID del usuario de los parámetros de la solicitud.

  try {
    // Buscar el usuario por su ID en la base de datos.
    const user = await User.findOneBy({ id: parseInt(id) });
    // Verificar si el usuario existe.
    if (!user) return res.status(404).json({ message: "Not user found" });

    // Actualizar el usuario con los datos de la solicitud.
    await User.update({ id: parseInt(id) }, req.body);

    // Enviar una respuesta de éxito sin contenido.
    return res.sendStatus(204);
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso.
    if (error instanceof Error) {
      // Enviar una respuesta de error con el mensaje de error.
      return res.status(500).json({ message: error.message });
    }
  }
};

// Controlador para eliminar un usuario.
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params; // Obtener el ID del usuario de los parámetros de la solicitud.
  try {
    // Eliminar el usuario de la base de datos por su ID.
    const result = await User.delete({ id: parseInt(id) });

    // Verificar si se eliminó algún usuario.
    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    // Enviar una respuesta de éxito sin contenido.
    return res.sendStatus(204);
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso.
    if (error instanceof Error) {
      // Enviar una respuesta de error con el mensaje de error.
      return res.status(500).json({ message: error.message });
    }
  }
};

// Controlador para obtener un usuario por su ID.
export const getUser = async (req: Request, res: Response) => {
  try {
    // Obtener el ID del usuario de los parámetros de la solicitud.
    const { id } = req.params;
    // Buscar el usuario por su ID en la base de datos.
    const user = await User.findOneBy({ id: parseInt(id) });

    // Verificar si el usuario existe.
    if (!user) return res.status(404).json({ message: "User not found" });

    // Enviar una respuesta JSON con el usuario encontrado.
    return res.json(user);
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso.
    if (error instanceof Error) {
      // Enviar una respuesta de error con el mensaje de error.
      return res.status(500).json({ message: error.message });
    }
  }
};
