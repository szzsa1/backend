import { Request, Response } from "express";
import userService from "../services/userService";
import { userSchema, UserInput } from "../models/User";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email }: UserInput = userSchema.parse(req.body);
    if(!name || !email) {
      throw new Error("Name and email are required");
    }

    if(await userService.getUserByEmail(email)) {
      throw new Error("Email already in use");
    }

    const user = await userService.createUser({ name, email });
    res.status(201).json(user);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(parseInt(id));
    res.json(user);
  } catch (error) {
    res.status(404).json({ error });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email }: UserInput = userSchema.parse(req.body);
    const user = await userService.updateUser(parseInt(id), { name, email });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(parseInt(id));
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error });
  }
};

export { createUser, getUsers, getUserById, updateUser, deleteUser };
