import {expect, test} from 'bun:test'

const {default: torus} = await import('#src/main.ts')

test('should run', () => {
  const result = torus()
  expect(result).toBe('torus') // TODO Test actual functionality
})
