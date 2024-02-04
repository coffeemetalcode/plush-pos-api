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

export class UpdateCustomerDTO {
  @IsOptional()
  @IsDateString()
  birth_date?: string;

  @IsOptional()
  @IsString()
  display_name?: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  username: string;
}
