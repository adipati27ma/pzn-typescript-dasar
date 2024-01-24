describe('Function', () => {
  it('should support in typescript', () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello('Eko')).toBe('Hello Eko');

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello('Adip');
  });

  // Func. Default Value Parameter
  it('should support default value', function () {
    function sayHello(name: string = 'Guest'): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe('Hello Guest');
    expect(sayHello('Eko')).toBe('Hello Eko');
  });

  // Rest Parameter (tipe data wajib array of ... )
  it('should support rest parameter', function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it('should support optional parameter', function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello('Eko')).toBe('Hello Eko');
    expect(sayHello('Eko', 'Kurniawan')).toBe('Hello Eko Kurniawan');
  });

  // Func. Overloading (penimpaan)
  it('should support function overloading', function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === 'string') {
        return value.toUpperCase();
      } else if (typeof value === 'number') {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe('Eko')).toBe('EKO');
  });

  // Func. as Param
  it('should function as parameter', function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('Eko', toUpper)).toBe('Hello EKO');

    expect(
      sayHello('Eko', function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe('Hello EKO'); // anonymous functiuon

    expect(sayHello('Eko', (name: string): string => name.toUpperCase())).toBe(
      'Hello EKO'
    ); // arrow function
  });
});
