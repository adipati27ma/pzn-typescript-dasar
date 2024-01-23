describe('Union Type', () => {
  it('should support in typescript', function () {
    let sample: number | string | boolean = 'Eko';
    sample = 100;
    sample = true;

    console.info(sample);
  });

  it('should support typeof operator', function () {
    function process(value: number | string | boolean) {
      if (typeof value === 'string') {
        return value.toUpperCase();
      } else if (typeof value === 'number') {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process('eko')).toBe('EKO');
    expect(process(2)).toBe(4);
    expect(process(true)).toBe(false);
  });
});
