import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemsRepository)
    private itemsRepository: ItemsRepository,
  ) {}

  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  findAll() {
    return this.itemsRepository.find({
      relations: ['category', 'variables'],
    });
  }

  findOne(id: string) {
    return this.itemsRepository.findOne({
      relations: ['category', 'variables'],
      where: { id: id },
    });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
