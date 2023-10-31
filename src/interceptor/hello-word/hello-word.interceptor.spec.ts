import { HelloWordInterceptor } from './hello-word.interceptor';

describe('HelloWordInterceptor', () => {
  it('should be defined', () => {
    expect(new HelloWordInterceptor()).toBeDefined();
  });
});
