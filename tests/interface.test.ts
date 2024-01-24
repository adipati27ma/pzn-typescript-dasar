import { Employee, Manager } from '../src/employee';
import { Person } from '../src/person';
import { Seller } from '../src/seller';

describe('Interface', () => {
  it('should support in typescript', () => {
    const seller: Seller = {
      id: 1,
      name: 'Toko ABC',
      nib: '419786',
      npwp: '124198',
    };

    seller.name = 'Toko Eko';

    console.info(seller);
  });

  // function interface
  it('should support function interface', function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  // indexable interface number (array)
  it('should support indexable interface', () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ['Eko', 'Kurniawan', 'Khannedy'];
    console.info(names);
  });

  // indexable interface non-number (dictionray)
  it('should support indexable interface for non number index', function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: 'Eko',
      address: 'Indonesia',
    };

    expect(dictionary['name']).toBe('Eko');
    expect(dictionary['address']).toBe('Indonesia');
  });

  // Extending Interface
  it('should support extends interface', () => {
    const employee: Employee = {
      id: '1',
      name: 'Eko',
      division: 'IT',
    };
    console.info(employee);

    const managerA: Manager = {
      id: '2',
      name: 'Adip',
      division: 'IT',
      numberOfEmployees: 320,
    };
    console.info(managerA);
  });

  // Function in Interface
  it('should support function in interface', () => {
    const person1: Person = {
      name: 'Adip',
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person1.sayHello('Brody'));
  });

  // Intersection Type
  it('should support intersection types', () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain1: Domain = {
      id: '1',
      name: 'Adip',
    };
    console.info(domain1);
  });

  // Type Assertion
  it('should support type assertions', function () {
    const person: any = {
      name: 'Eko',
      age: 30,
    };

    const person2: Person = person as Person; // konversi nya harus hati-hati (karena jika nilai tidak ada tidak error, tapi begitu diakses error)
    console.info(person2);
    // person2.sayHello("Budi");

    console.info(person2);
  });
});
