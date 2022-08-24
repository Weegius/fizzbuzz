const fb = require('../fizzbuzz')

test('FIZZ', () => {
  expect(fb.FIZZ).toBe('fizz')
})

test('BUZZ', () => {
  expect(fb.BUZZ).toBe('buzz')
})

test('FIZZBUZZ', () => {
  expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

test('isFizzy', () => {
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(9)).toBe(true)
  expect(fb.isFizzy(10)).toBe(false)
  expect(fb.isFizzy(14)).toBe(false)
  expect(fb.isFizzy(18)).toBe(true)
  expect(fb.isFizzy(214)).toBe(false)
})

test('isBuzzy', () => {
  expect(fb.isBuzzy(5)).toBe(true)
  expect(fb.isBuzzy(18)).toBe(false)
  expect(fb.isBuzzy(23)).toBe(false)
  expect(fb.isBuzzy(150)).toBe(true)
  expect(fb.isBuzzy(36)).toBe(false)
});

test('fizzyBuzzy', () => {
  expect(fb.fizzyBuzzy(5)).toBe('buzz')
  expect(fb.fizzyBuzzy(8)).toBe('')
  expect(fb.fizzyBuzzy(6)).toBe('fizz')
  expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
})

test('fizzbuzz count', () => {
  expect(fb.fizzBuzz(20)).toStrictEqual( {"buzz": 3, "count": 20, "fizz": 5, "fizzBuzz": 1})
  expect(fb.fizzBuzz(18)).toStrictEqual( {"buzz": 2, "count": 18, "fizz": 5, "fizzBuzz": 1})
  expect(fb.fizzBuzz(42)).toStrictEqual( {"buzz": 6, "count": 42, "fizz": 12, "fizzBuzz": 2})
})

