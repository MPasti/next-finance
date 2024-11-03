import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O nome de usuário é obrigatório.' })
  username: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Por favor, forneça um endereço de email válido.' })
  email: string;

  @IsString({ message: 'A senha é obrigatória.' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  password: string;

  @IsOptional()
  @IsString({ message: 'Os papéis devem ser uma string.' })
  roles?: string;
}
