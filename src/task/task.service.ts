import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';
import { AddTaskArgs } from './add.task.args';
import { UpdateTaskArgs } from './update.task.args';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    public readonly taskRepo: Repository<TaskEntity>,
  ) {}

  async findAllTasks(): Promise<TaskEntity[]> {
    const tasks = await this.taskRepo.find();
    return tasks;
  }

  async findTaskById(id: number): Promise<TaskEntity> {
    const task = await this.taskRepo.findOne({
      where: {
        id: id,
      },
    });
    return task;
  }

  async deleteTask(id: number): Promise<string> {
    await this.taskRepo.delete(id);
    return 'Book has been deleted';
  }

  async addTask(addTaskArgs: AddTaskArgs): Promise<string> {
    const task: TaskEntity = new TaskEntity();
    task.title = addTaskArgs.title;
    task.description = addTaskArgs.description;
    await this.taskRepo.save(task);
    return 'Book has been successfully added';
  }

  async updateTask(updateTaskArgs: UpdateTaskArgs): Promise<string> {
    const task: TaskEntity = await this.taskRepo.findOne({
      where: {
        id: updateTaskArgs.id,
      },
    });
    task.title = updateTaskArgs.title;
    task.description = updateTaskArgs.description;
    await this.taskRepo.save(task);
    return 'Book has been successfully uodated';
  }
}
