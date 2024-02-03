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

  create(
    email: string,
    first_name: string,
    last_name: string,
    phone: string,
    password: string,
    username: string,
  ): void {
    const customer: Customer = this._repo.create({
      email,
      first_name,
      last_name,
      phone,
      password,
      username,
    });

    this._repo.save(customer);
  }
}
