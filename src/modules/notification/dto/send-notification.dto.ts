import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
export enum ESendNotificationType {
  MUA = 1,
  BAN = 2,
  TAI = 3,
  XUI = 4,
  CHAN = 5,
  LE = 6,
}
export class SendNotificationDto {
  @ApiProperty({
    example: 1,
    description:
      'Kiểu gửi thông báo . Mua:1 , Ban:2,Tai:3,Xui :4 , Chan:5 ,Le:6',
  })
  @IsEnum(ESendNotificationType)
  type: number;
}