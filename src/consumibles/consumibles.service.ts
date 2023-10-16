import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateConsumibleDto } from './dto/create-consumible.dto';
import { UpdateConsumibleDto } from './dto/update-consumible.dto';
import { Consumible } from './entities/consumible.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ConsumiblesService {
  constructor(
    @InjectModel(Consumible.name)
    private readonly consumibleModel: Model<Consumible>,
  ) {}

  async create(createConsumibleDto: CreateConsumibleDto) {
    createConsumibleDto.name = createConsumibleDto.name.toLowerCase();
    try {
      const consumible = await this.consumibleModel.create(createConsumibleDto);
      return consumible;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async createMany(createConsumibleDto: CreateConsumibleDto[]) {
    createConsumibleDto.forEach((element) => {
      element.name = element.name.toLowerCase();
    });
    try {
      const consumible =
        await this.consumibleModel.insertMany(createConsumibleDto);
      return consumible;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const consumible = await this.consumibleModel.find();
      return consumible;
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: string) {
    return `This action returns a #${id} consumible`;
  }

  update(id: number, updateConsumibleDto: UpdateConsumibleDto) {
    return `This action updates a #${id} consumible`;
  }

  remove(id: number) {
    return `This action removes a #${id} consumible`;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadGatewayException(
        `Consumible already exist in db ${JSON.stringify(error.keyValue)}`,
      );
    }

    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Consumible - Check Server Logs`,
    );
  }
}
