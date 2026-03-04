import type { InsertMessage, Message } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemoryStorage implements IStorage {
  private currentId = 1;

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      ...insertMessage,
      id: this.currentId++,
      createdAt: new Date(),
    };
    return message;
  }
}

export const storage = new MemoryStorage();
