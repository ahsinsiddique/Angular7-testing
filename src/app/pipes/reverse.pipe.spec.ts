import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance, should reverse string', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('Ahsan')).toBe('nashA');
  });
});
