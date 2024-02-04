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

  register(attrs: Partial<Customer>) {
    const customer: Customer = this._repo.create(attrs);

    this._repo.save(customer);
  }

  async update(id: number, attrs: Partial<Customer>) {
    const customer = await this.findOne(id);

    if (!customer) {
      throw new NotFoundException(`user with id ${id} doesn't exist!`);
    }

    Object.assign(customer, attrs);
    return this._repo.save(customer);
  }
}
