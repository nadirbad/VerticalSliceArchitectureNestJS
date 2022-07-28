import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoitemsModule } from './todoitems/todoitems.module';

@Module({
  imports: [TodoitemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
