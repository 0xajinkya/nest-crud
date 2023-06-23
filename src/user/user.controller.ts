import { Controller, Get, UseGuards, Patch, Body } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {

    constructor(private userService: UserService){}

    @Get('me')
    getMe(
        @GetUser() user: User
        ) {
        return user
    }

    @Patch()
    editMe(
        @GetUser("id") userId: number,
        @Body() dto: EditUserDto
    ) {
        return this.userService.editUser(userId, dto);
    }

}
