describe('Array test', function () {
  it('should same with javascript', function () {
    const names: string[] = ['eko', 'budi', 'joko']; // array of string
    const values: number[] = [1, 2, 3]; // array of number
    const hobbies: ReadonlyArray<string> = ['Mengetik', 'Hacking']; // readonly array of string

    console.info(names);
    console.info(values);
    console.info(hobbies);
  });

  it('should support tuple', function () {
    const person: readonly [string, string, number] = ['Adip', 'Eko', 27]; // tuple (length, index, & data type has been determined)
    console.info(person);

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
