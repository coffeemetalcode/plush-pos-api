import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customers')
export class Customer {
  @Column({ type: 'date', nullable: true })
  birth_date: string; // ! <-- Date;?

  @Column({ type: 'varchar', length: 64, nullable: true })
  display_name: string;

  @Column({ type: 'varchar', length: 64 })
  email: string;

  @Column({ type: 'varchar', length: 64 })
  first_name: string;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64 })
  last_name: string;

  @Column({ type: 'varchar', length: 24 })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'time', default: () => 'now()' })
  registration_date: string;

  @Column({ type: 'varchar', length: 32, unique: true })
  username: string;

  @AfterInsert()
  logInsert() {
    console.log(`customer with id ${this.id} was added`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`customer with id ${this.id} was updated`);
  }

  // TODO: how to soft-delete a customer
  @AfterRemove()
  logRemove() {
    console.log(`customer with id ${this.id} was removed`);
  }
}
