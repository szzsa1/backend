import { PrismaClient } from "@prisma/client";
import { UserInput } from "../models/User";
import logger from "../utils/logger";

const prisma = new PrismaClient();

class UserService {

  /**
   * Create a new user
   * @param data  - User data: { name: string, email: string }
   * @returns     - The created user
   */
  async createUser(data: UserInput) {
    try {
      const user = await prisma.user.create({ data });
      return user;
    } catch (error) {
      logger.error(`Error creating user: ${error}`);
      throw new Error("Failed to create user");
    }
  }

  /**
   * Retrieve all users
   * @returns - List of users
   */
  async getUsers() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      logger.error(`Error fetching users: ${error}`);
      throw new Error("Failed to fetch users");
    }
  }

  /**
   * Retrieve a user by ID
   * @param id  - User ID
   * @returns   - The user with the specified ID
   */
  async getUserById(id: number) {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      logger.error(`Error fetching user: ${error}`);
      throw new Error("Failed to fetch user");
    }
  }

  async getUserByEmail(email: string) {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      logger.error(`Error fetching user: ${error}`);
      throw new Error("Failed to fetch user");
    }
  }

  /**
   * Update a user by ID
   * @param id  - User ID
   * @param data  - User data: { name: string, email: string }
   * @returns   - The updated user
   */
  async updateUser(id: number, data: UserInput) {
    try {
      const user = await prisma.user.update({
        where: { id },
        data,
      });
      logger.info(`User updated: ${JSON.stringify(user)}`);
      return user;
    } catch (error) {
      logger.error(`Error updating user: ${error}`);
      throw new Error("Failed to update user");
    }
  }

  /**
   * Delete a user by ID
   * @param id - User ID
   */
  async deleteUser(id: number) {
    try {
      await prisma.user.delete({ where: { id } });
      logger.info(`User deleted: ${id}`);
    } catch (error) {
      logger.error(`Error deleting user: ${error}`);
      throw new Error("Failed to delete user");
    }
  }
}

export default new UserService();
