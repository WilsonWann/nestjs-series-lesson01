import { UseGuards, applyDecorators } from '@nestjs/common';
import { Roles } from '../roles/roles.decorator';
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { RoleGuard } from 'src/guard/role/role.guard';

export const Auth = (...roles: string[]) => applyDecorators(
  Roles(...roles),
  UseGuards(AuthGuard, RoleGuard)
)
