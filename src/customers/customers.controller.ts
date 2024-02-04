import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CustomersService } from './customers.service';
import { CreateCustomerDTO, UpdateCustomerDTO } from './customers.dto';

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

  @Post('/signup')
  async createCustomer(@Body() body: CreateCustomerDTO) {
    const customer = await this._customersService.register(
      body.email,
      body.first_name,
      body.last_name,
      body.phone,
      body.password,
      body.username,
      body.birth_date,
      body.display_name,
    );

    return customer;
  }

  @Patch('/:id')
  async updateCustomer(
    @Param('id') id: string,
    @Body() body: UpdateCustomerDTO,
  ) {
    return await this._customersService.update(parseInt(id), body);
  }
}
