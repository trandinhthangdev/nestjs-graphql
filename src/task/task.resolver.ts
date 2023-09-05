import { Args, Int, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Task } from './task.schema';
import { TaskService } from './task.service';
import { AddTaskArgs } from './add.task.args';
import { UpdateTaskArgs } from './update.task.args';

@Resolver((of) => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query((returns) => [Task], { name: 'tasks' })
  getAllTasks() {
    return this.taskService.findAllTasks();
  }

  @Query((returns) => Task, { name: 'taskById' })
  getTaskById(@Args({ name: 'taskId', type: () => Int }) id: number) {
    return this.taskService.findTaskById(id);
  }

  @Mutation((returns) => String, { name: 'deleteTask' })
  deleteTaskById(@Args({ name: 'taskId', type: () => Int }) id: number) {
    return this.taskService.deleteTask(id);
  }

  @Mutation((returns) => String, { name: 'addTask' })
  addTask(@Args('addTaskArgs') addTaskArgs: AddTaskArgs) {
    return this.taskService.addTask(addTaskArgs);
  }

  @Mutation((returns) => String, { name: 'updateTask' })
  updateTask(@Args('updateTaskArgs') updateTaskArgs: UpdateTaskArgs) {
    return this.taskService.updateTask(updateTaskArgs);
  }
}
