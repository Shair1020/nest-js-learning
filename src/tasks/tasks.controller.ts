import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    const tasks = this.taskService.getAllTasks();
    return {
      status: true,
      message: 'Get All Tasks Successfully',
      data: tasks,
    };
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    const createTask = this.taskService.createTask(title, description);
    return {
      status: true,
      message: 'Create Task Successfully',
      data: createTask,
    };
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    const task = this.taskService.getTaskById(id);
    console.log(task);
    return {
      status: true,
      message: 'Get Task Successfully',
      data: task,
    };
  }
}
