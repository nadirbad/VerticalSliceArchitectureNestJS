import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoItemsModule } from './todo-items/todo-items.module';
import { TodoListsModule } from './todo-lists/todo-lists.module';

@Module({
  imports: [TodoItemsModule, TodoListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
