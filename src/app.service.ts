import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export const dynamicProvider1 = {
  provide: 'PROVIDER1',
  useFactory: (provider2: any) => {
    setTimeout(() => {
      console.log('from provider 1', provider2);
    }, 1);
    return {
      name: 'provider 1',
    };
  },
  inject: ['PROVIDER2'],
};

export const dynamicProvider2 = {
  provide: 'PROVIDER2',
  useFactory: (provider1: any) => {
    setTimeout(() => {
      console.log('from provider 2', provider1);
    }, 1);
    return {
      name: 'provider 2',
    };
  },
  inject: ['PROVIDER1'],
};
