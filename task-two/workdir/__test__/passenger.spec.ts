import taskOne from '../task/app';
import { prefilled } from './mock';

describe('Test for function structure', () => {
  it('Returns an object for even distro', () => {
    let passengers = 5;
    let shuffle = 3;
    expect(taskOne(passengers, shuffle)).toBeInstanceOf(Object);
  });

  it('function is been called with 2 arguments', () => {
    let passengers = 10;
    let shuffle = 3;
    const func = jest.fn(taskOne);
    func(passengers, shuffle);
    expect(func).toHaveBeenCalledWith(passengers, shuffle);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe('Test for function expected value', () => {
  it('Returns evenly distributed values for boarded', () => {
    let passengers = 15;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(15);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(1);
  });

  it('Returns reservation list for uneven distro', () => {
    let passengers = 52;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.boarded[49]).toStrictEqual({
      name: 'passenger50',
      location: expect.any(String),
    });
    expect(expected.reservation.length).toBe(2);
  });

  it('Passengers does not exceed 50', () => {
    let passengers = 60;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.reservation.length).toBe(10);
    expect(expected.count).toBe(1);
  });
});

describe('test for shuffle', () => {
  it('Single shuffle works ', () => {
    let passengers = 60;
    let shuffle = 1;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(10);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(2);
  });

  it('first multiple shuffle works ', () => {
    let passengers = 60;
    let shuffle = 3;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(10);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(2);
  });

  it('second multiple shuffle works ', () => {
    let passengers = 150;
    let shuffle = 3;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(3);
  });

  it('third multiple shuffle works ', () => {
    let passengers = 210;
    let shuffle = 3;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.reservation.length).toBe(10);
    expect(expected.count).toBe(4);
  });
});

describe('test for boarded value', () => {
  let passengers = 50;
  let shuffle = 0;

  const expected = taskOne(passengers, shuffle);
  expect(expected.boarded).toStrictEqual(prefilled);
});

describe('Test for function structure', () => {
  it('Returns an object for even distro', () => {
    const expected = prefilled;
    const actual = taskOne(50, 0);
    expect(actual.boarded).toEqual(expected);
    expect(actual.boarded.length).toEqual(expected.length);
  });

  it('checks that the function is called with 2 arguments', () => {
    expect(taskOne.length).toBe(2);
  });
});

describe('Test for function expected value', () => {
  it('Returns evenly distributed values for boarded', () => {
    const { boarded } = taskOne(50, 0);
    const expected = prefilled.length % 5 === 0;
    const actual = boarded.length % 5 === 0;

    expect(actual).toEqual(expected);
  });

  it('Returns reservation list for uneven distro', () => {
    const { reservation } = taskOne(4, 4);
    expect(reservation.length).toBeGreaterThanOrEqual(0);
  });

  it('boarded does not exceed 50 people for 60 passengers with shuffle of 0', () => {
    let passengers = 60;
    let shuffle = 0;
    const actual = taskOne(passengers, shuffle);

    expect(actual.boarded.length).not.toBeGreaterThan(50);
  });
});

describe('test for shuffle', () => {
  it('Single shuffle works ', () => {
    const shuffle = 1;
    const passengers = 55;
    const { count } = taskOne(passengers, shuffle);

    expect(count).toEqual(2);
  });

  it('first multiple shuffle works ', () => {
    const shuffle = 2;
    const passengers = 4;
    const { count } = taskOne(passengers, shuffle);

    expect(count).toEqual(0);
  });

  it('second multiple shuffle works ', () => {
    const shuffle = 3;
    const passengers = 67;
    const { count } = taskOne(passengers, shuffle);

    expect(count).toEqual(2);
  });

  it('third multiple shuffle works ', () => {
    const shuffle = 2;
    const passengers = 153;
    const { count } = taskOne(passengers, shuffle);

    expect(count).toEqual(3);
  });
});

describe('test for boarded value with passengers of 50 and shuffle 0', () => {
  let passengers = 50;
  let shuffle = 0;

  const expected = taskOne(passengers, shuffle);
  expect(expected.boarded).toStrictEqual(prefilled);
});

describe('Test for function structure', () => {
  it('Returns an object for even distro', () => {
    let passengers = 5;
    let shuffle = 3;
    expect(taskOne(passengers, shuffle)).toBeInstanceOf(Object);
  });

  it('checks that the function is called with 2 arguments', () => {
    expect(taskOne.length).toBe(2);
  });

  it('Returns an object for even distro', () => {
    let passengers = 5;
    let shuffle = 3;
    expect(taskOne(passengers, shuffle)).toBeInstanceOf(Object);
  });

  it('function is been called with 2 arguments', () => {
    let passengers = 10;
    let shuffle = 3;
    const func = jest.fn(taskOne);
    func(passengers, shuffle);
    expect(func).toHaveBeenCalledWith(passengers, shuffle);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe('Test for function expected value', () => {
  it('Returns evenly distributed values for boarded', () => {
    let passengers = 15;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(15);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(1);
  });
  

  it('Returns reservation list for uneven distro', () => {
    let passengers = 52;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.boarded[49]).toStrictEqual({
      name: 'passenger50',
      location: expect.any(String),
    });
    expect(expected.reservation.length).toBe(2);
  });

  it('Passengers does not exceed 50', () => {
    let passengers = 60;
    let shuffle = 0;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.reservation.length).toBe(10);
    expect(expected.count).toBe(1);
  });
});

describe('test for shuffle', () => {
  it('Single shuffle works ', () => {
    let passengers = 60;
    let shuffle = 1;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(10);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(2);
  });

  it('first multiple shuffle works ', () => {
    let passengers = 60;
    let shuffle = 3;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(10);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(2);
  });

  it('second multiple shuffle works ', () => {
    let passengers = 150;
    let shuffle = 3;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.reservation.length).toBe(0);
    expect(expected.count).toBe(3);
  });

  it('third multiple shuffle works ', () => {
    let passengers = 210;
    let shuffle = 3;
    const expected = taskOne(passengers, shuffle);
    expect(expected.boarded.length).toBe(50);
    expect(expected.reservation.length).toBe(10);
    expect(expected.count).toBe(4);
  });
});

describe('test for boarded value', () => {
  let passengers = 50;
  let shuffle = 0;

  const expected = taskOne(passengers, shuffle);
  expect(expected.boarded).toStrictEqual(prefilled);
});
