import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AdminAuthGuard } from 'src/common/auth.guard';
import { PushNotificationDevicesDto } from './dto/push-devices.dto';
import { SendNotificationDto } from './dto/send-notification.dto';
import { NotificationService } from './notification.service';
@ApiTags('Notification Api')
@ApiConsumes('Notification Api')
@ApiBearerAuth()
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('test-device')
  @ApiOperation({ summary: 'test gửi thông báo tới 1 thiết bị' })
  @HttpCode(204)
  async testToDevices(
    @Body() pushNotificationDevicesDto: PushNotificationDevicesDto,
  ) {
    return this.notificationService.testPush(pushNotificationDevicesDto.token);
  }

  @Post('send')
  @ApiOperation({ summary: 'gửi thông báo cho nhóm người dùng' })
  @HttpCode(204)
  @UseGuards(AdminAuthGuard)
  async send(@Body() SendNotificationDto: SendNotificationDto) {}
}
