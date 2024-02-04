import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private _repo: Repository<Customer>,
  ) {}

  findOne(id: number): Promise<Customer> {
    if (!id) {
      throw new NotFoundException(`user with id ${id} doesn't exist!`);
    }

    const customer = this._repo.findOneBy({ id });

    return customer;
  }

  findAll(): Promise<Customer[]> {
    return this._repo.find();
  }

  // TODO make this method take a single argument of an object of type Customer
  register(
    email: string,
    first_name: string,
    last_name: string,
    phone: string,
    password: string,
    username: string,
    birth_date?: string,
    display_name?: string,
  ): void {
    const customer: Customer = this._repo.create({
      email,
      first_name,
      last_name,
      phone,
      password,
      username,
      birth_date,
      display_name,
    });

    this._repo.save(customer);
  }
}
