import { Module } from '@nestjs/common';
import { GetNameController } from './get-name/get-name.controller';
import { GetNameService } from './get-name/get-name.service';

@Module({
  imports: [],
  controllers: [GetNameController],
  providers: [GetNameService],
})
export class AppModule {}
