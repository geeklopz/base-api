import { Item } from 'src/entities/item.entity';

export class ReturnAllItemsDto {
  items: Item[];
  numberOfItems: number;
}
