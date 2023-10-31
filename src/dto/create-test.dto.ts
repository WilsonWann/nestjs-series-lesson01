import { IsString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly author: string;
}