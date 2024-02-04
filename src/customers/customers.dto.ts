import { IsDateString, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDTO {
  @IsOptional()
  @IsDateString()
  birth_date?: string;

  @IsOptional()
  @IsString()
  display_name?: string;

  @IsEmail()
  email: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  phone: string;

  @IsString()
  password: string;

  @IsString()
  username: string;
}
