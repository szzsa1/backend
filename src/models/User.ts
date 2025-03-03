import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

type UserInput = z.infer<typeof userSchema>;

export { prisma, userSchema, UserInput };
