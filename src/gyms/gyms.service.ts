import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from './entities/gym.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GymsService {
  constructor(
    @InjectModel(Gym.name)
    private readonly gymModel: Model<Gym>,
  ) {}

  async create(createGymDto: CreateGymDto) {
    createGymDto.ciudad = createGymDto.ciudad.toLowerCase();
    try {
      const gym = await this.gymModel.create(createGymDto);
      return gym;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const gyms = await this.gymModel.find();
      return gyms;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    let gym: Gym;

    try {
      gym = await this.gymModel.findById(id);
    } catch (error) {
      this.handleExceptions(error);
    }
    return gym;
  }

  update(id: number, updateGymDto: UpdateGymDto) {
    return `This action updates a #${id} gym`;
  }

  remove(id: number) {
    return `This action removes a #${id} gym`;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadGatewayException(
        `Gym already exist in db ${JSON.stringify(error.keyValue)}`,
      );
    }

    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Gym - Check Server Logs`,
    );
  }
}
