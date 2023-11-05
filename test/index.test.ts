import { describe, it, expect } from 'bun:test'
import { nearest } from '../src'

// TODO: Write more tests

describe('should', () => {
  it('be New York City', async () => {
    const cities = await nearest({ latitude: 40.710704, longitude: -74.006123 })
    expect(cities).toBeArrayOfSize(1)
    expect(cities[0][0]).toStrictEqual({
      name: 'New York City',
      latitude: 40.71427,
      longitude: -74.00597,
      countryCode: 'US'
    })
  })
})
