import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Deployed nestjs app into server using elastic beastalk service.';
  }
}
