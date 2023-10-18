import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('trainer')
export class TrainersController {
  constructor(private readonly trainersService: TrainersService) {}

  @Post()
  create(@Body() createTrainerDto: CreateTrainerDto) {
    return this.trainersService.create(createTrainerDto);
  }

  @Get()
  findAll() {
    return this.trainersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.trainersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateTrainerDto: UpdateTrainerDto,
  ) {
    return this.trainersService.update(id, updateTrainerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainersService.remove(id);
  }
}
