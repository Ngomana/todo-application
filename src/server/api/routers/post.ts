import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Define Todo interface
interface Todo {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "completed" | "pending" | "active" | "overdue";
  _createdAt: string;
  _updatedAt: string;
}
const todos: Todo[] = [
  /*{
   /id: 1,
    title: "Learn TRPC",
    description: "Study how to integrate TRPC into a project.",
    startDate: "2025-02-01",
    endDate: "2025-02-10",
    status: "active",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  },*/
];

// Router for Todo-related actions
export const todoRouter = createTRPCRouter({
  // Fetch all Todos
  list: publicProcedure.query(() => todos),

  // Create a new Todo
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        startDate: z.string(),
        endDate: z.string(),
        status: z.enum(["completed", "pending", "active", "overdue"]),
      })
    )
    .mutation(async ({ input }) => {
      const todo: Todo = {
        id: todos.length + 1,
        title: input.title,
        description: input.description,
        startDate: input.startDate,
        endDate: input.endDate,
        status: input.status,
        _createdAt: new Date().toISOString(),
        _updatedAt: new Date().toISOString(),
      };
      todos.push(todo);
      return todo;
    }),

  // Fetch a specific Todo by ID
  getById: publicProcedure.input(z.number()).query((opts) => {
    return todos.find((todo) => todo.id === opts.input) ?? null;
  }),

  // Update an existing Todo
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1),
        description: z.string().min(1),
        startDate: z.string(),
        endDate: z.string(),
        status: z.enum(["completed", "pending", "active", "overdue"]),
      })
    )
    .mutation(async ({ input }) => {
      const todoIndex = todos.findIndex((todo) => todo.id === input.id);
      if (todoIndex === -1) {
        throw new Error("Todo not found");
      }
      const updatedTodo = { ...todos[todoIndex], ...input, _updatedAt: new Date().toISOString() };
      todos[todoIndex] = updatedTodo;
      return updatedTodo;
    }),

    

  // Delete a Todo
  delete: publicProcedure.input(z.number()).mutation(async ({ input }) => {
    const todoIndex = todos.findIndex((todo) => todo.id === input);
    if (todoIndex === -1) {
      throw new Error("Todo not found");
    }
    const deletedTodo = todos.splice(todoIndex, 1);
    return deletedTodo[0];
  }),
});
