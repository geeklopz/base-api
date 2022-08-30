import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Item } from './item.entity';

@Entity({ name: 'item_variables' })
@Unique(['name'])
export class Variable extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: string;

  @Column({ name: 'image_url', nullable: false })
  imageUrl: string;

  @Column({ name: 'thumbnail_url', nullable: false })
  thumbnailUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Item, (item) => item.id)
  @JoinColumn({ name: 'item_id' })
  item: Item;
}
