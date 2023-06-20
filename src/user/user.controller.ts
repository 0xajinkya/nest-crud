import { Controller, Get, UseGuards, Patch } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';;

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    @Get('me')
    getMe(
        @GetUser('id') userId: number,
        @GetUser('email') email: string
        ) {
        return {userId, email}
    }

    // @Patch()
    // editMe() {

    // }

}
