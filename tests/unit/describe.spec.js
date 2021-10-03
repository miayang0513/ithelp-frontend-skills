const number = 2

describe('Number', () => {
  test('is 2', () => {
    expect(number).toBe(2)
  })

  test('is even', () => {
    expect(number % 2).toBe(0)
  })
})