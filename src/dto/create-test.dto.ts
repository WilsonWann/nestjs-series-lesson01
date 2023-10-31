import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTestDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly author: string;
}