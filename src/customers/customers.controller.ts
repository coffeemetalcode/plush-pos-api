import { Controller, Get, Param } from '@nestjs/common';

import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private _customersService: CustomersService) {}

  @Get('/')
  async findCustomers() {
    return await this._customersService.findAll();
  }

  @Get('/:id')
  async findCustomer(@Param('id') id: string) {
    const customer = await this._customersService.findOne(parseInt(id));

    return customer;
  }
}
