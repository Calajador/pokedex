import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { Trainer } from './entities/trainer.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TrainersService {
  constructor(
    @InjectModel(Trainer.name)
    private readonly trainerModel: Model<Trainer>,
  ) {}

  async create(createTrainerDto: CreateTrainerDto) {
    createTrainerDto.name = createTrainerDto.name.toLowerCase();
    try {
      const trainer = await this.trainerModel.create(createTrainerDto);
      return trainer;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return `This action returns all trainers`;
  }

  async findOne(id: string) {
    let trainer: Trainer;

    try {
      trainer = await this.trainerModel.findById(id);
    } catch (error) {
      this.handleExceptions(error);
    }
    return trainer;
  }

  update(id: string, updateTrainerDto: UpdateTrainerDto) {
    return `This action updates a #${id} trainer`;
  }

  remove(id: string) {
    return `This action removes a #${id} trainer`;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadGatewayException(
        `Trainer already exist in db ${JSON.stringify(error.keyValue)}`,
      );
    }

    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Trainer - Check Server Logs`,
    );
  }
}
